# Weight Loss Center Landing Page

## Project Overview

This project is a landing page for a weight loss center, designed to provide information about the center's services, procedures, and contact details. The landing page features a responsive design with a touch-enabled image slider, a navigation menu, and various sections highlighting the center's offerings. The project is built using HTML, CSS, and JavaScript, and is served using an Express.js server.

## Project Structure

The project has the following structure:

### Key Files and Directories

- **app.js**: Sets up the Express.js server to serve static files and the main HTML file.
- **package.json**: Contains project metadata and dependencies.
- **server.js**: Starts the HTTP server using the Express.js app.
- **src/index.html**: The main HTML file for the landing page.
- **src/assets/**: Contains images and other static assets used in the landing page.
- **src/css/index.css**: The main CSS file for styling the landing page.
- **src/javascript/nav.js**: Handles the navigation menu functionality.
- **src/javascript/slider.js**: Implements the touch-enabled image slider.

## Features

### Navigation Menu

The navigation menu is responsive and includes a hamburger icon for mobile views. It allows users to navigate to different sections of the landing page.

### Image Slider

The image slider is touch-enabled and supports automatic sliding with a 3-second interval. Users can navigate through slides using touch gestures or navigation dots.

### Flexbox Sections

The landing page includes sections styled using Flexbox for a responsive layout. These sections highlight different weight loss procedures offered by the center.

### Contact Section

The contact section includes a form for users to submit their contact details and a message. It also features a background image and a decorative airplane image.

### Footer

The footer includes the center's address, social media buttons, and copyright information.

## Installation and Running

## Installation and Running

**Using `npm install` and `npm run dev`**

1.  **Project Setup:**

    - Verify your Node.js project directory contains a `package.json` file.
    - Ensure the `package.json` file has a "dev" script defined within the "scripts" section.

2.  **Install Dependencies:**

    - Open your terminal or command prompt.
    - Navigate to your project's root directory.
    - Execute the command: `npm install`
    - This will download and install the packages listed in `package.json` into the `node_modules` folder, and create or update `package-lock.json`.

3.  **Start Development Server:**
    - After the installation completes, run: `npm run dev`
    - This command will execute the script defined under "dev" in your `package.json` file, typically starting your development server.
