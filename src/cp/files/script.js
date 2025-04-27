import { logMsg } from '../../utils.js';
const args = process.argv.slice(2);

logMsg(`Total number of arguments is ${args.length}`, 'important');
logMsg(`Arguments: ${JSON.stringify(args)}`, 'important');

const echoInput = (chunk) => {
  const chunkStringified = chunk.toString();
  if (chunkStringified.includes('CLOSE')) {
    logMsg('Ending work cp.js');
    process.exit(0);
  }
  process.stdout.write(`Received from master process: ${chunk.toString()}\n`);
};

process.stdin.on('data', echoInput);
