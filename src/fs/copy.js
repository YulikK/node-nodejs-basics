import fs from 'node:fs/promises';
import path from 'node:path';
import {logMsg, getPathData} from '../utils.js';

const sourceDirName = 'files';
const targetDirName = 'files_copy';
const errorMessage = 'FS operation failed';
const { __dirname } = getPathData(import.meta.url);

const copy = async () => {
  logMsg('Starting work copy.js');

  const sourcePath = path.join(__dirname, sourceDirName);
  const targetPath = path.join(__dirname, targetDirName);

  try {
    await fs.cp(sourcePath, targetPath, { recursive: true, errorOnExist: true, force: false });
    logMsg(`Success: Directory '${sourceDirName}' copied to '${targetDirName}'`);
  } catch (error) {
    logMsg(`${errorMessage}. ${error}`, 'error');
  }
};

await copy();
