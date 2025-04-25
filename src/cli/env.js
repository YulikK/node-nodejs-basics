import { logMsg } from '../utils.js';
const parseEnv = () => {
  logMsg('Starting work env.js');
  const envVars = process.env;
  const rssVars = [];

  for (let key in envVars) {
    if (key.startsWith('RSS_')) {
      rssVars.push(`${key}=${envVars[key]}`);
    }
  }
  if (rssVars.length === 0) {
    logMsg('No RSS variables found', 'important');
  } else {
    logMsg(rssVars.join('\n'), 'important');
  }
  logMsg('Ending work env.js');
};

parseEnv();
