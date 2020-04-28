const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync(path.join(__dirname, '../svgs/avatars.svg'));

console.log(svg);
