/**
 * This script sets up an Express.js server for the book library landing page.
 * 
 * Features:
 * - Serves static files from the 'assets', 'css', and 'js' directories.
 * - Serves the 'index.html' file for the root route.
 * - Provides an API endpoint to fetch book data from an external API.
 * 
 * Dependencies:
 * - path: Node.js module for handling and transforming file paths.
 * - express: Fast, unopinionated, minimalist web framework for Node.js.
 * - cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).
 * - node-fetch: A light-weight module that brings `window.fetch` to Node.js.
 * 
 * Middleware:
 * - express.static: Serves static files such as images, CSS files, and JavaScript files.
 * - cors: Enables CORS for all routes with specified options.
 * 
 * Routes:
 * - GET /: Serves the 'index.html' file.
 * - GET /api/v1/books: Fetches book data from an external API and returns it as JSON.
 */

const path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend origin
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Enable CORS for all routes with options
app.use(cors(corsOptions));

// Serve static files from the 'assets', 'css', and 'js' directories.
app.use('/assets', express.static(path.join(__dirname, '/src/assets')));
app.use('/css', express.static(path.join(__dirname, '/src/css')));
app.use('/js', express.static(path.join(__dirname, '/src/js')));

// API endpoint to fetch book data from an external API
app.get('/api/v1/books', async (req, res) => {
  try {
    console.log('Fetching books from external API...');
    const response = await fetch('https://freetestapi.com/api/v1/books');
    console.log(`Response status: ${response.status}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Books fetched successfully:', data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Serve the 'index.html' file for the root route.
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

module.exports = app;