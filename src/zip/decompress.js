import { join } from 'node:path';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';

const decompress = async () => {
  const unzip = createUnzip();
  const filePath = join(import.meta.dirname, 'files', 'fileToCompress.txt');
  const archivePath = join(import.meta.dirname, 'files', 'archive.gz');
  const src = createReadStream(archivePath);
  const dest = createWriteStream(filePath);

  try {
    await pipeline(src, unzip, dest);
    await rm(archivePath);
  } catch (e) {
    console.error(e);
  }
};

await decompress();
