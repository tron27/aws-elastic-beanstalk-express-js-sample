const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Module 1: Set up Git Repo!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
