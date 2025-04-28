import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { logMsg } from '../utils.js';
import os from 'node:os';

const reverseTransform = new Transform({
  transform(chunk, _, callback) {
    const reversed =
      chunk.toString().trim().split('').reverse().join('') + os.EOL;
    callback(null, reversed);
  },
});

const transform = async () => {
  logMsg('Starting work transform.js');

  try {
    await pipeline(stdin, reverseTransform, stdout, { end: false });
  } catch (error) {
    logMsg(error, 'error');
  }

  logMsg('Ending work transform.js');
};

await transform();
