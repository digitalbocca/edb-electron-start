'use strict'

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./src/database/db.json')
const db = low(adapter)

db.defaults({
  msg: 'Este texto está vindo do backend'
}).write()

module.exports = db
