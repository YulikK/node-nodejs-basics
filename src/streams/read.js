import fs from 'node:fs';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import os from 'node:os';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const fileName = 'fileToRead.txt';
const { __dirname } = getPathData(import.meta.url);
const filePath = path.join(__dirname, dirName, fileName);

const read = async () => {
  logMsg('Starting work read.js');

  const sourceStream = fs.createReadStream(filePath);
  sourceStream.on('end', () => process.stdout.write(os.EOL));

  await pipeline(sourceStream, stdout, { end: false });

  logMsg('Ending work read.js');
};

await read();
