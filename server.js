const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
