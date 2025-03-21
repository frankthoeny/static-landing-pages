/**
 * This script sets up an HTTP server for the book library application.
 * 
 * Features:
 * - Creates an HTTP server using the Express application.
 * - Listens on a specified port (default is 3000).
 * - Logs the server URL and port to the console.
 * 
 * Dependencies:
 * - http: Node.js module for creating an HTTP server.
 * - app: The Express application defined in 'app.js'.
 * 
 * Environment Variables:
 * - PORT: The port number on which the server will listen (default is 3000).
 */


const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT);
console.log(`Listening on port ${PORT}...`);
console.log(`URL: http://localhost:${PORT}`);