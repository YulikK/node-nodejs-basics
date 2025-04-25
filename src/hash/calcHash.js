import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { logMsg, getPathData } from '../utils.js';

const { __dirname } = getPathData(import.meta.url);
const dirName = 'files';
const fileName = 'fileToCalculateHashFor.txt';
const filePath = path.join(__dirname, dirName, fileName);
const hashAlgorithm = 'sha256';

const calculateHash = async () => {
  logMsg('Starting work calcHash.js');

  const hash = createHash(hashAlgorithm);

  try {
    const stream = createReadStream(filePath);

    await pipeline(stream, hash);

    logMsg(hash.digest('hex'), 'important');
  } catch (err) {
    logMsg(err, 'error');
  }
  logMsg('Ending work calcHash.js');
};

await calculateHash();
