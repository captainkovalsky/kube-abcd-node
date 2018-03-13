const restify = require('restify')
var clients = require('restify-clients')

const PORT = process.env.PORT || 8080

var client = clients.createJsonClient({
  url: process.env.d_uri,
  version: '~1.0'
});

const server = restify.createServer({
  name: 'c',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/echo', (a, res, next) => {
  client.get('/echo', (a, b, c, obj) => {
    console.log('Server returned: %j', obj);
    res.send(obj);
    return next();
  })
});

server.listen(PORT, function () {
  console.log('%s listening at %s', server.name, server.url);
});