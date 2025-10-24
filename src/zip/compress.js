import { join } from 'node:path';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';

const compress = async () => {
  const gzip = createGzip();
  const filePath = join(import.meta.dirname, 'files', 'fileToCompress.txt');
  const archivePath = join(import.meta.dirname, 'files', 'archive.gz');
  const src = createReadStream(filePath);
  const dest = createWriteStream(archivePath);

  try {
    await pipeline(src, gzip, dest);
    await rm(filePath);
  } catch (e) {
    console.error(e);
  }
};

await compress();
