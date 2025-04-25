import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const encoding = 'utf8';
const dirName = 'files';
const fileName = 'fileToRead.txt';
const errorMessage = 'FS operation failed';
const { __dirname } = getPathData(import.meta.url);

const read = async () => {
  logMsg('Starting work read.js');

  const filePath = path.join(__dirname, dirName, fileName);

  try {
    const content = await fs.readFile(filePath, encoding);
    logMsg(content, 'important');
    logMsg('Success: File content printed');
  } catch (error) {
    logMsg(`${errorMessage}. ${error}`, 'error');
  }
};

await read();
