import path from 'path';
import fs from 'node:fs/promises';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.cjs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const dirName = 'files';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileA = path.join(__dirname, dirName, 'a.json');
const fileB = path.join(__dirname, dirName, 'b.json');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  const { default: jsonData } = await import(fileA, {
    with: { type: 'json' },
  });
  unknownObject = jsonData;
} else {
  const { default: jsonData } = await import(fileB, {
    with: { type: 'json' },
  });
  unknownObject = jsonData;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
