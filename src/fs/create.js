import { appendFile } from 'fs/promises';
import { join } from 'path';

const create = async () => {
  const filePath = join(import.meta.dirname, 'files', 'fresh.txt');

  try {
    await appendFile(filePath, 'I am fresh and young', { flag: 'ax' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
