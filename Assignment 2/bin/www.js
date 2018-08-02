var http = require('http')

var server = http.createServer(function(req, res) {
  res.writeHead(200)
  res.end('<h1>Hello World!</h1><h2>ASL Demo</h2>')
})
server.listen(3000, function() {
  console.log('Server listening on port 3000')
})
