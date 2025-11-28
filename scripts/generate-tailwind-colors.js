const fs = require('fs');
const path = require('path');

const TOKENS_PATH = path.resolve(__dirname, '..', 'src', 'react-app', 'styles', 'tokens.css');
const OUT_PATH = path.resolve(__dirname, '..', 'tailwind-colors.json');

function parseTokens(css) {
  const lines = css.split(/\r?\n/);
  const map = {};
  const re = /^\s*--([a-z0-9-]+)\s*:\s*(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}));/;
  for (const line of lines) {
    const m = line.match(re);
    if (m) {
      const key = m[1];
      const hex = m[2];
      map[key] = hex.toLowerCase();
    }
  }
  return map;
}

function main() {
  if (!fs.existsSync(TOKENS_PATH)) {
    console.error('tokens.css not found at', TOKENS_PATH);
    process.exit(2);
  }

  const css = fs.readFileSync(TOKENS_PATH, 'utf8');
  const colors = parseTokens(css);

  fs.writeFileSync(OUT_PATH, JSON.stringify(colors, null, 2) + '\n', 'utf8');
  console.log('Wrote', OUT_PATH, Object.keys(colors).length, 'entries');
}

if (require.main === module) main();
