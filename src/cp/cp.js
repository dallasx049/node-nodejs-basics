import { join } from 'node:path';
import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const processorPath = join(import.meta.dirname, 'files', 'script.js');
  const child = spawn(`node`, [processorPath, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  [1, 2, 3] );