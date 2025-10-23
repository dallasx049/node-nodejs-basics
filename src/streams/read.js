import { createReadStream } from 'node:fs';
import { join } from 'node:path';

const read = async () => {
  const filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');
  const rs = createReadStream(filePath);

  rs.on('end', () => process.stdout.write('\n'));

  rs.pipe(process.stdout);
};

await read();
