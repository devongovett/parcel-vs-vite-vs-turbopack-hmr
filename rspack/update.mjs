import fs from 'fs';

switch (process.argv.at(-1)) {
  case 'leaf':
    fs.writeFileSync('src/components/comp0.jsx', `export function Comp0() {
      return <div>{Date.now() - ${Date.now()}}</div>
    }`);
    break;
  case 'root':
    let page = fs.readFileSync('src/App.jsx', 'utf8');
    fs.writeFileSync('src/App.jsx', page.replace(/root: (.+)/, `root: {Date.now() - ${Date.now()}}`));
    break;
  default:
    throw new Error('Run with "leaf" or "root" as an argument');
}
