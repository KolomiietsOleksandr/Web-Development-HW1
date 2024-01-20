const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('No get endpoint.');
});

app.get('/get', (req, res) => {
    res.send('You get a response.');
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
