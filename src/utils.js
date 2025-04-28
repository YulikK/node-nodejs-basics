import { fileURLToPath } from 'url';
import { dirname } from 'path';

const USE_COLORS = true;
const supportsColor =
  process.stdout.isTTY && process.env.TERM !== 'dumb' && USE_COLORS;

const colors = {
  green: supportsColor ? '\x1b[32m' : '',
  violet: supportsColor ? '\x1b[35m' : '',
  red: supportsColor ? '\x1b[31m' : '',
  reset: supportsColor ? '\x1b[0m' : '',
};

const colorMap = {
  info: colors.green,
  important: colors.violet,
  error: colors.red,
};

export function logMsg(msg, type = 'info') {
  const message = `${colorMap[type]}${msg}${colors.reset}`;
  if (type === 'error') {
    throw new Error(message);
  } else {
    console.log(message);
  }
}

export function getPathData(meta) {
  const __filename = fileURLToPath(meta);
  const __dirname = dirname(__filename);
  return { __filename, __dirname };
}
