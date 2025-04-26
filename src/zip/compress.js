import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const sourceFileName = 'fileToCompress.txt';
const archiveName = 'archive.gz';
const { __dirname } = getPathData(import.meta.url);
const sourcePath = path.join(__dirname, dirName, sourceFileName);
const archivePath = path.join(__dirname, dirName, archiveName);

const compress = async () => {
  logMsg('Starting work compress.js');

  const sourceStream = createReadStream(sourcePath);
  const gzipStream = createGzip();
  const destinationStream = createWriteStream(archivePath);

  try {
    await pipeline(sourceStream, gzipStream, destinationStream);
  } catch (error) {
    logMsg(error, 'error');
  }

  logMsg('Ending work compress.js');
};

await compress();
