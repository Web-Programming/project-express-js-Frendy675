// app.js
const express = require('express');
const app = express();
const port = 3000;

// Membuat route ke halaman home dengan metode GET
app.get('/', (req, res) => {
    res.send('Halo, Ini halaman HOME dengan method GET');
});

// Membuat middleware untuk memeriksa request body dari json
app.use(express.json());


// Membuat route ke halaman submit dengan method POST
app.post('/submit', (req, res) => {
    const {name, npm, jeniskelamin} = req.body;
    res.send('Halo, ${name} Dengan NPM ${npm} Apakah Kami ${jeniskelamin}?');
});

app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}/`);
});

app.use(express.static('public'));

app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}/`);
});
