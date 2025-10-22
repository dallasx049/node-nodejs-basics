import { readdir } from 'fs/promises';
import { join } from 'path';

const list = async () => {
  const dir = join(import.meta.dirname, 'files');

  try {
    const files = await readdir(dir);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
