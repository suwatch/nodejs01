var http = require('http'),
    connect = require('connect');

var app = connect()
  .use(function(req, res){
      console.log('Received request at ' + new Date().toString() + '\r\n');
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello from nodejs01 site at ' + new Date().toString() + '!\n');
  });

//setInterval(function writeToLog(){
//      console.log(new Date().toString() + '\r\n');
//}, 5000);

http.createServer(app).listen(process.env.port || 8000, 'localhost');
