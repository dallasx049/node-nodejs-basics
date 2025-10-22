import { join } from 'path';
import fs from 'fs/promises';

const rename = async () => {
  const wrongFilenamePath = join(import.meta.dirname, 'files', 'wrongFilename.txt');
  const properFilenamePath = join(import.meta.dirname, 'files', 'properFilename.md');

  try {
    if (await fileExists(properFilenamePath)) {
      throw new Error();
    }
    await fs.rename(wrongFilenamePath, properFilenamePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

const fileExists = async (path) => {
  try {
    await fs.access(path, fs.constants.R_OK);
    return true;
  } catch {
    return false;
  }
};

await rename();
