require('babel-register')

const debug = require('debug')('plato:bin:clean')

debug('Clean dist files...')

require('rimraf')(require('../config').paths.dist('**'), err => {
  if (err) {
    debug(err)
  } else {
    debug('Files cleaned.')
  }
})
