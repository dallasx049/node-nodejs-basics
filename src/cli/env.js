const parseEnv = () => {
  const filteredEnvs = Object.entries(process.env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(filteredEnvs);
};

parseEnv();
