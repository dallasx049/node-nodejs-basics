import { join } from 'path';
import { cp } from 'fs/promises';

const copy = async () => {
  const srcFolderPath = join(import.meta.dirname, 'files');
  const destFolderPath = join(import.meta.dirname, 'files_copy');

  try {
    await cp(srcFolderPath, destFolderPath, {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
