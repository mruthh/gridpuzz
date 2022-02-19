const { Server } = require('node-static')

const server = new Server('./dist')

// copied wholesale from the Node Static README :)
require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    //
    // Serve files!
    //
    server.serve(request, response)
  }).resume()
}).listen(process.env.PORT || 3000)