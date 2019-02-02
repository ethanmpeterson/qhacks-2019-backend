'use strict'
const express = require('express')
const app = express()
const port = 3000

const { convert } = require('convert-svg-to-png');

const fs = require('fs')
const path = require('path')
const runParallel = require('run-parallel')
const runWaterfall = require('run-waterfall')
const pcbStackup = require('pcb-stackup')

const fileNames = [
    'arduino-uno.cmp',
    'arduino-uno.drd',
    'arduino-uno.gko',
    'arduino-uno.plc',
    'arduino-uno.sol',
    'arduino-uno.stc',
    'arduino-uno.sts',
  ]
  
  const layers = fileNames.map(filename => ({
    filename,
    gerber: fs.createReadStream(filename),
  }))
  
  var svg = 0

  pcbStackup(layers, (error, stackup) => {
    if (error) return console.error(error)
  
    console.log(stackup.top.svg) // logs "<svg ... </svg>"
    console.log(stackup.bottom.svg) // logs "<svg ... </svg>"
    //svg = stackup.top.svg
  })

  app.get('/', (req, res) => res.send("Hello World"))
  app.post('/test',function(req, res) {
      console.log(req)
      res.send("req received")
  });
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))

