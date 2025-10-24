import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { join } from 'node:path';

const Statuses = {
  RESOLVED: 'resolved',
  ERROR: 'error',
};

const workerPath = join(import.meta.dirname, 'worker.js');
const maxCpus = cpus().length;

const performCalculations = async () => {
  const workers = [];
  for (let i = 0; i < maxCpus; i++) {
    workers.push(createPromisifiedWorker(i + 10));
  }

  const settledWorkers = await Promise.allSettled(workers);
  const results = settledWorkers.map((p) => p.status === 'fulfilled' ? p.value : p.reason);
  console.log(results);
};

/*
* A function to create promisified version of a worker
* to preserve the results order
*  */
const createPromisifiedWorker = (workerData) => {
  return new Promise((res, rej) => {
    const worker = new Worker(workerPath, {
      workerData,
    });

    worker.on('error', () => {
      rej({ status: Statuses.ERROR, data: null });
    });

    worker.on('message', (message) => {
      res({ status: Statuses.RESOLVED, data: message });
    });
  });
};

await performCalculations();
