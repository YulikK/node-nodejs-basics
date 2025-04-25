import fs from 'node:fs/promises';
import path from 'node:path';
import {logMsg, getPathData} from '../utils.js';

const fileName = 'fresh.txt';
const dirName = 'files';
const content = 'I am fresh and young';
const {__dirname} = getPathData(import.meta.url);

const create = async () => {
  logMsg('Starting work create.js');

  await checkDirectory();
  await checkFile();
  
};

const checkDirectory = async () => {
  const dirPath = path.join(__dirname, dirName);
  try {
    await fs.access(dirPath);
    logMsg(`The directory '${dirName}' exists`);
  } catch {
    await fs.mkdir(dirPath);
    logMsg(`The directory '${dirName}' was created`);
  }
}

const checkFile = async () => {
  const filePath = path.join(__dirname, dirName, fileName);
  try {
    await fs.writeFile(filePath, content, { flag: 'wx' });
    logMsg(`Success: file ${fileName} created`);
  } catch {
    logMsg('Error: FS operation failed', 'error');
  }
}

await create();