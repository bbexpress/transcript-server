// server.js
const express = require('express');
const fs = require('fs')
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3001;
app.use(cors());

// Define a simple route
app.get('/api/data', (req, res) => {
  // You can send any data you want as the response

let fileContents = fs.readFileSync('./Zoom/2023-12-12 09.43.28 new meeting test/meeting_saved_closed_caption.txt').toString();
// fileContents = fileContents.replace(/[\n\r]/g, ' ');
  res.json({ message: 'Hello from the server!',
            transcript: fileContents});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});