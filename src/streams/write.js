import { createWriteStream } from 'node:fs';
import { join } from 'node:path';

const write = async () => {
  const filePath = join(import.meta.dirname, 'files', 'fileToWrite.txt');
  const ws = createWriteStream(filePath);

  process.stdin.pipe(ws);
};

await write();
