const { execSync } = require('child_process');
const fs = require('fs');
try {
    const output = execSync('npx eslint src --format json', { encoding: 'utf-8' });
    fs.writeFileSync('lint-res.json', output, 'utf-8');
} catch (e) {
    fs.writeFileSync('lint-res.json', e.stdout, 'utf-8');
}
console.log('Done');
