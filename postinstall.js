var child_process = require("child_process");
const tnsVersion = child_process.execSync('tns --version', { encoding: 'ascii'});
// const tnsVersion = child_process.execSync('npx tns --version', { encoding: 'ascii'});
console.log('node --version:' + child_process.execSync('node --version', { encoding: 'ascii'}));
console.log('npm --version:' + child_process.execSync('npm --version', { encoding: 'ascii'}));

console.log(`tns version is ${tnsVersion}`);