const restify = require('restify')

const PORT = process.env.PORT || 8080

const server = restify.createServer({
  name: 'd',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/echo', (a, res, next) => {
  res.send('d last service');
  return next();
});

server.listen(PORT, function () {
  console.log('%s listening at %s', server.name, server.url);
});