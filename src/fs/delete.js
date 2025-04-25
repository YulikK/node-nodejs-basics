import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const fileName = 'fileToRemove.txt';
const errorMessage = 'FS operation failed';
const { __dirname } = getPathData(import.meta.url);

const remove = async () => {
  logMsg('Starting work delete.js');

  const filePath = path.join(__dirname, dirName, fileName);
  try {
    await fs.unlink(filePath);
    logMsg(`Success: File ${fileName} was deleted`);
  } catch (error) {
    logMsg(`${errorMessage}. ${error}`, 'error');
  }
};

await remove();
