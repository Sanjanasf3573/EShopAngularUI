const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Define your routes and other middleware

app.listen(7018, () => {
  console.log('Server is running on port 7018');
});
