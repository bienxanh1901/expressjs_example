'use strict';

const express = require('express');

// Constants
const PORT = 8888;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);