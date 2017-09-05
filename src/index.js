'use strict'

const NodeEnvironment = require('jest-environment-node')

class AegirEnvironment extends NodeEnvironment {
  constructor (config) {
    super(Object.assign({}, config, {
      globals: Object.assign({}, config.globals, {
        Uint8Array: Uint8Array
      })
    }))
  }
}

module.exports = AegirEnvironment
