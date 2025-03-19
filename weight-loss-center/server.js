// server.js
const http = require('http');
const PORT = process.env.PORT || 3000;

const appServer = require('./app');
const httpServer = http.createServer(appServer);

httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);
console.log(`URL: http://localhost:${PORT}`);