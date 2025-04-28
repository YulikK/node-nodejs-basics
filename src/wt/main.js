import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { logMsg } from '../utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');
const countStart = 10;
const workers = [];
const numCPUs = cpus().length;

const performCalculations = async () => {
  logMsg('Starting work main.js');

  for (let i = 0; i < numCPUs; i++) {
    workers.push(fibonacciWorkerService(i));
  }

  const result = await Promise.all(workers);

  console.log(result);

  logMsg('Ending work main.js');
};

function fibonacciWorkerService(index) {
  return new Promise((resolve) => {
    const count = countStart + index;
    const worker = new Worker(workerPath, { workerData: count });
    worker.on('message', (data) => {
      resolve(data);
    });
    worker.on('error', (data) => {
      resolve(data);
    });
  });
}

await performCalculations();
