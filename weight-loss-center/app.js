/**
 * This script sets up an Express.js server for the weight loss center landing page.
 * 
 * Features:
 * - Serves static files from the 'assets', 'scss', and 'javascript' directories.
 * - Serves the 'index.html' file for the root route.
 * 
 * Dependencies:
 * - path: Node.js module for handling and transforming file paths.
 * - express: Fast, unopinionated, minimalist web framework for Node.js.
 * 
 * Middleware:
 * - express.static: Serves static files such as images, CSS files, and JavaScript files.
 * 
 * Routes:
 * - GET /: Serves the 'index.html' file.
 */
const path = require('path');
const express = require('express');

const app = express();

// Serve static files from the 'assets', '/', and 'javascript' directories.
app.use('/assets', express.static(path.join(__dirname, '/src/assets')));
app.use('/css', express.static(path.join(__dirname, '/src/css')));
app.use('/javascript', express.static(path.join(__dirname, '/src/javascript')));

// Serve the 'index.html' file for the root route.
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

module.exports = app;