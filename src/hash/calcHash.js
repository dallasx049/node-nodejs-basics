import { join } from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const filePath = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
  const rs = createReadStream(filePath);
  const hash = createHash('sha256');

  rs.on('data', (chunk) => {
    hash.update(chunk);
  });

  rs.on('end', () => {
    process.stdout.write(hash.digest('hex'));
    process.stdout.write('\n');
  })
};

await calculateHash();
