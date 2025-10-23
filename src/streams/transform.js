import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

class Reverse extends Transform {
  constructor() {
    super();
  }

  _transform(data, encoding, callback) {
    this.push(data.toString().split('').reverse().join(''));
    callback();
  }
}

const transform = async () => {
  try {
    await pipeline(
      process.stdin,
      new Reverse(),
      process.stdout,
    );
  } catch (e) {
    console.error(e);
  }
};

await transform();
