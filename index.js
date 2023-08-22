const app = require('./app');
const http = require('http');

const server = http.createServer(app);

const port = 3003;

server.listen(port, () => {
  console.log('el server esta corriendo');
  console.log(`http://localhost:${port}/`);

});