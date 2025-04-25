const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  reset: '\x1b[0m'
};

const colorMap = {
  info: colors.green,
  error: colors.red,
};

export function logMsg(msg, type = 'info') {
  console.log(`${colorMap[type]}${msg}${colors.reset}`);
}
