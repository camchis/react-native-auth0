if (process.platform === 'win32') {
  console.error('Must be run on a Unix OS');
  process.exit(1);
}

var execSync = require('child_process').execSync;
var fs = require('fs');

execSync('yarn docs', { stdio: 'inherit' });

if (fs.existsSync('docs')) {
  execSync('rm -r docs', { stdio: 'inherit' });
}

execSync('mv out/ docs/', {
  stdio: 'inherit',
});

execSync('git add docs');
