const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const { SERVER_PORT } = process.env;
console.log('SERVER_PORT: ', SERVER_PORT);
const port = process.env.PORT || SERVER_PORT;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
