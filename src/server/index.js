'use strict'

const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'ok'
  })
})

app.listen(1985, () => {
  console.log('Servidor EDB Iniciado na porta 1985')
})
