// based on https://docs.saltstack.com/en/develop/ref/states/all/salt.states.pkg.html
// and https://github.com/mmalecki/nibbler-apt/blob/master/index.js

const { join } = require('path')
const Log = require('pino')

const exec = require('./exec')

module.exports = aptPkg

function aptPkg (options) {
  var { packages = [] } = options
  const {
    package,
    log = Log()
  } = options

  if (package) packages.push(package)

  var commands = []

  commands.push(`apt install -y ${packages.join(' ')}`)

  return exec({
    commands,
    sudo: true
  })
}
