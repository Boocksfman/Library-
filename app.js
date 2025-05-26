// Main application file
const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a GET route for '/' that renders an index.ejs template
app.get('/', (req, res) => {
  res.render('index', { title: 'Homepage' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
