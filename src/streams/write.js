import fs from 'node:fs';
import { stdin } from 'node:process';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const { __dirname } = getPathData(import.meta.url);
const fileName = 'fileToWrite.txt';
const filePath = path.join(__dirname, dirName, fileName);

const write = async () => {
  logMsg('Starting work write.js');
  try {
    const writeStream = fs.createWriteStream(filePath);
    await pipeline(stdin, writeStream);
  } catch (error) {
    logMsg(error, 'error');
  }
  logMsg('Ending work write.js');
};

await write();
