const fs = require('fs');
const yaml = require('js-yaml');

const envFileContent = fs.readFileSync('./.env', 'utf-8');

const output = {
  env: [],
};
envFileContent.split('\n').forEach(x => {
  if (x.trim() === '') return;

  const [name, value] = x.split(/=(.+)?/, 2);
  output.env.push({
    name,
    value,
  });
});

const result = yaml.safeDump(output);
fs.writeFileSync('env.yaml', result);

console.log('Done.');
