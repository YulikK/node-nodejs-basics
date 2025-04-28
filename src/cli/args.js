import { logMsg } from '../utils.js';

const parseArgs = () => {
  logMsg('Starting work env.js');

  const args = process.argv.slice(2);

  if (args.length === 0) {
    logMsg('No arguments found', 'important');
  }

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].slice(2);
    const value = args[i + 1];
    logMsg(`${propName} is ${value}`, 'important');
  }

  logMsg('Ending work env.js');
};

parseArgs();
