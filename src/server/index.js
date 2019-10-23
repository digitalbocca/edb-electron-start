'use strict'

const cors = require('cors')
const express = require('express')

const database = require('./../database')

const app = express()

require('dotenv').config()

app.use(cors())

app.get('/', async (req, res) => {
  try {
    const backendMessage = (await database.get('msg').value())
    res.status(200).json({
      msg: backendMessage
    })
  } catch (e) {
    console.log(e.message)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor EDB funcionando na porta: ${process.env.PORT}`)
})
