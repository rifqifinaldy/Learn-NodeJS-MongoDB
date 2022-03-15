const express = require('express');

// Express App
const app = express();

// Directory Name
const dirname = {root : __dirname}

// Listen for Request
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', dirname)
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', dirname)
});

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', dirname)
});