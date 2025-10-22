import { rm } from 'fs/promises';
import { join } from 'path';

const remove = async () => {
  const filePath = join(import.meta.dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
