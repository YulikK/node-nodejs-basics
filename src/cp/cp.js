import { fork } from 'node:child_process';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const fileName = 'script.js';
const dirName = 'files';
const { __dirname } = getPathData(import.meta.url);
const scriptPath = path.join(__dirname, dirName, fileName);

const spawnChildProcess = async (args) => {
  logMsg('Starting work cp.js');
  fork(scriptPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['a', 'b', 'c', 'd']);
