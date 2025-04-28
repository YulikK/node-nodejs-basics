import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const oldFileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';
const errorMap = {
  ENOENT: 'FS operation failed',
  EEXIST: 'FS operation failed',
};
const { __dirname } = getPathData(import.meta.url);

const rename = async () => {
  logMsg('Starting work rename.js');
  const oldPath = path.join(__dirname, dirName, oldFileName);
  const newPath = path.join(__dirname, dirName, newFileName);

  if (!(await isFileExists(oldPath))) {
    logMsg(
      `${errorMap.EEXIST}. The file ${oldFileName} does not exist`,
      'error'
    );
  }

  if (await isFileExists(newPath)) {
    logMsg(
      `${errorMap.EEXIST}. The file ${newFileName} already exist`,
      'error'
    );
  }

  try {
    await fs.rename(oldPath, newPath);
    logMsg(`Success: file ${oldFileName} renamed to ${newFileName}`);
  } catch (error) {
    const errorMessage = errorMap[error.code] || error.message;
    logMsg(`${errorMessage}. ${error}`, 'error');
  }

  logMsg('Ending work rename.js');
};

function isFileExists(filePath) {
  return fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);
}

await rename();
