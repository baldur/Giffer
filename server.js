var argvs = process.argv.splice(2);

var http  = require('http'),
    fs    = require('fs'),
    url   = require('url');

var giffer = fs.readFileSync('./giffer.gif')

var listners = require('./listners').run();
listners.add();

server = http.createServer(function(req, res) {
    var request = url.parse(req.url, true);
    var headers = req.headers;

    // we only do gif's
    if(request.pathname.match(/\.gif$/) === null) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }

    res.writeHead(200, {
        'Content-Length': giffer.length,
        'Content-Type': 'image/gif',
        'Content-Disposition': 'inline'
    });
    res.write(giffer);
    res.end();

    listners.eventer().record(request, headers);
});

port = (argvs && argvs[0]) ? argvs[0] : 8080;

console.log("Starting server. on port", port);

server.listen(port);


