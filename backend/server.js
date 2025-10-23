const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: './public'
});

// Enable CORS
const cors = require('cors');
server.use(cors());

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});