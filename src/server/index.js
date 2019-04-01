'use strict'

const cors = require('cors')
const express = require('express')

const app = express()

require('dotenv').config()

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Este texto está vindo do backend'
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor EDB funcionando na porta: ${process.env.PORT}`)
})
