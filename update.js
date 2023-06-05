const pkg = require('./package.json')
const fsp = require('node:fs/promises')

const version = pkg.version.split('.').map(chunk => +chunk)
version[version.length - 1] += 1
pkg.version = version.join('.')
fsp.writeFile('./package.json', JSON.stringify(pkg, null, 4))
