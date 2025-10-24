import { workerData, parentPort } from 'node:worker_threads';

// Simulate the worker's rejection
const rnd = Math.random();
if (rnd < 0.5) throw new Error();

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
