var http = require('http');

var app = function(req, res) {
    console.log(new Date().toString() + ': request for ' + req.url);
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    res.end('Hello from nodejs01 site at ' + new Date().toString() + '!\n');
};

http.createServer(app).listen(process.env.port || 8000, 'localhost');
