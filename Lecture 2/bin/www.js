const app = require('../app')
const http = require('http')

const port = 3000
app.set('port', port)

const server = http.createServer(app)

server.listen(3000)
server.on('listening', () => console.log(`Server running on port ${port}`))
