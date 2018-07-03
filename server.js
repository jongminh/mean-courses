const http = require('http');
// default nodejs package, 'require' nodejs syntax
const app = require('./backend/app');

const port = process.env.PORT || 3000;

app.set('port', port);
const server = http.createServer(app);

// vanilla nodejs
// const server = http.createServer( (req, res) => {
//   res.end('This is my first response');
// });

server.listen(port);
