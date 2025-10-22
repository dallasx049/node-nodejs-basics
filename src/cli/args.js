const parseArgs = () => {
  const args = process.argv
    .slice(2)
    .map((arg) => arg.startsWith('--') ? arg.slice(2) : arg);
  const temp = [];

  while (args.length) {
    temp.push(args.splice(0, 2).join(' is '));
  }

  console.log(temp.join(', '));
};

parseArgs();
