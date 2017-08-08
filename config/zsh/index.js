const { join } = require('path')

module.exports = [
  {
    type: 'gitrepo',
    source: 'git://github.com/robbyrussell/oh-my-zsh',
    target: '.oh-my-zsh'
  },
  {
    type: 'link',
    source: join(__dirname, 'z.sh'),
    target: 'z.sh'
  },
  {
    type: 'link',
    source: join(__dirname, 'zshrc'),
    target: '.zshrc'
  },
  {
    type: 'link',
    source: join(__dirname, 'zshenv'),
    target: '.zshenv'
  },
  {
    type: 'link',
    source: join(__dirname, 'zlogin'),
    target: '.zlogin'
  },
  {
    type: 'link',
    source: join(__dirname, 'zprofile'),
    target: '.zprofile'
  },
  {
    type: 'aptpkg',
    package: 'zsh'
  },
  {
    type: 'chsh',
    shell: '/bin/zsh'
  }
]
