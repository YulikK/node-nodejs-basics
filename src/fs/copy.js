import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const sourceDirName = 'files';
const targetDirName = 'files_copy';
const { __dirname } = getPathData(import.meta.url);
const errorMap = {
  ENOENT: 'FS operation failed',
  EEXIST: 'FS operation failed',
  ERR_FS_CP_EEXIST: 'FS operation failed',
};
const copy = async () => {
  logMsg('Starting work copy.js');

  const sourcePath = path.join(__dirname, sourceDirName);
  const targetPath = path.join(__dirname, targetDirName);

  try {
    await fs.cp(sourcePath, targetPath, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    logMsg(
      `Success: Directory '${sourceDirName}' copied to '${targetDirName}'`
    );
  } catch (error) {
    const errorMessage = errorMap[error.code] || error.message;
    logMsg(`${errorMessage}. ${error}`, 'error');
  }
  logMsg('Ending work copy.js');
};

await copy();
