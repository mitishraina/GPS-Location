# Real-Time GPS Location Tracking

## Description

Real-Time GPS Location Tracking is a web-based application that enables users to track live GPS locations of their device on an interactive map. Built with modern web technologies, the application offers a seamless and responsive experience for real-time location monitoring.

## Features

- **Real-Time Tracking:** Track live GPS locations of devices.

- **Interactive Map:** Utilizes Leaflet.js for a user-friendly and customizable map interface.

- **WebSocket Integration:** Uses Socket.io for real-time communication between the server and client.

- **Dynamic Rendering:** Implements EJS (Embedded JavaScript) for server-side rendering of HTML templates.

- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technologies Used

1. **Leaflet.js**

- Lightweight, open-source JavaScript library for interactive maps.

- Provides simple APIs for adding maps, markers, and other map-related features.

- Used to render the map and display real-time GPS locations.

2. **Socket.io**

- Enables real-time, bidirectional communication between clients and servers.

- Uses WebSockets under the hood with fallback options for older browsers.

- Sends real-time GPS data from the server to the client.

3. **EJS (Embedded JavaScript)**

- Templating engine for generating HTML markup with JavaScript.

- Simplifies dynamic content rendering on the server side.

- Used to dynamically render HTML pages with server data.

4. **Node.js & Express.js**

- Node.js: Runtime environment for executing JavaScript on the server.

- Express.js: Web framework for Node.js that simplifies backend development.

- Used to create the backend server and handle API requests.

5. **HTML, CSS**

- Standard web technologies used for building the frontend interface and styling.

## How It Works

- The backend server receives GPS data from device.

- The server processes the data and sends it to the client in real-time using Socket.io.

- The client-side JavaScript (using Leaflet.js) updates the map with the latest GPS coordinates.

- The map dynamically displays the live location of the tracked device.

## Installation

1. Clone the repository
``` bash
git clone https://github.com/your-folder/GPS-location.git
```

2. Navigate to the project directory
``` bash
cd GPS-location
```
3. Install dependencies
``` bash
npm install
```
4. Start the server
``` bash
npm start
```
5. Open the application in your browser
``` bash
http://localhost:3000
```

## Usage

- Open the application in your browser.

- The map will load and display the real-time location of the tracked device(your location).

- Interact with the map to zoom in, zoom out, or move around.

Dependencies

- **Leaflet.js:** For map rendering.

- **Socket.io:** For real-time communication.

- **EJS:** For server-side rendering.

- **Express.js:** For backend server setup.

- **Socket.io:** For real-time communication.

- **EJS:** For server-side rendering.

- **Express.js:** For backend server setup.
