import { readFile } from 'fs/promises';
import { join } from 'path';

const read = async () => {
  const filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');

  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
