#!/usr/bin/env node

var exec = require('child_process').exec
var http = require('http')

var commands = process.argv.splice(2)
var port = 9090

var server = http.createServer(function (req, res) {
  var id = parseInt(req.url.slice(1))
  if(isNaN(id)) id = 0
  if(id > commands.length - 1) return res.end('Command endpoint does not exist\n')

  exec(commands[id]).stdout
  .pipe(res)
  .on('finish',function () {
    console.error('Command ' + id + ' done.')
    commands[id] = false
    if(!commands.some(function (e) {  return e })) server.close()
   })
}).listen(port)
console.error('Serving on localhost:' + port)