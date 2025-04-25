import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const errorMessage = 'FS operation failed';
const { __dirname } = getPathData(import.meta.url);

const list = async () => {
  logMsg('Starting work list.js');

  const dirPath = path.join(__dirname, dirName);

  try {
    const files = await fs.readdir(dirPath);
    logMsg(files.join('\n'), 'important');
    logMsg('Success: Files list printed');
  } catch (error) {
    logMsg(`${errorMessage}. ${error}`, 'error');
  }
};

await list();
