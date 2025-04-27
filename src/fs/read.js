import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const encoding = 'utf8';
const dirName = 'files';
const fileName = 'fileToRead.txt';
const errorMap = {
  ENOENT: 'FS operation failed',
};
const { __dirname } = getPathData(import.meta.url);

const read = async () => {
  logMsg('Starting work read.js');

  const filePath = path.join(__dirname, dirName, fileName);

  try {
    const content = await fs.readFile(filePath, encoding);
    logMsg(content, 'important');
    logMsg('Success: File content printed');
  } catch (error) {
    const errorMessage = errorMap[error.code] || error.message;
    logMsg(`${errorMessage}. ${error}`, 'error');
  }

  logMsg('Ending work read.js');
};

await read();
