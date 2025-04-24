import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const fileName = 'fresh.txt';
const dirName = 'files';
const content = 'I am fresh and young';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
    
const create = async () => {
  console.log('Starting work create.js');

  await checkDirectory();
  await checkFile();
  
};

const checkDirectory = async () => {
  const dirPath = path.join(__dirname, dirName);
  try {
    await fs.access(dirPath);
    console.log('Files directory exists');
  } catch {
    await fs.mkdir(dirPath);
    console.log('Files directory created');
  }
}

const checkFile = async () => {
  const filePath = path.join(__dirname, dirName, fileName);
  try {
    await fs.writeFile(filePath, content, { flag: 'wx' });
    console.log('File created');
  } catch {
    console.error('Error: FS operation failed');
  }
}

await create();