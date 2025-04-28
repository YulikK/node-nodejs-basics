import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const sourceFileName = 'archive.gz';
const decompressedFileName = 'fileToCompress.txt';
const { __dirname } = getPathData(import.meta.url);
const sourcePath = path.join(__dirname, dirName, sourceFileName);
const decompressedPath = path.join(__dirname, dirName, decompressedFileName);

const decompress = async () => {
  logMsg('Starting work decompress.js');
  try {
    const sourceStream = createReadStream(sourcePath);
    const gunzipStream = createGunzip();
    const destinationStream = createWriteStream(decompressedPath);

    await pipeline(sourceStream, gunzipStream, destinationStream);
  } catch (error) {
    logMsg(error, 'error');
  }
  logMsg('Ending work decompress.js');
};

await decompress();
