const express = require('express');
const path = require("path");

const index = express();
index.use(express.json());
index.use(express.urlencoded({extended: true}));

index.use('/static', express.static(path.join(process.cwd(), 'public')));


index.get('/', (req, res) => {
    res.json('hello express')
});

index.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

index.post('/login', (req, res) => {
    res.json('login success');
});

const PORT = 3000;
index.listen(PORT, () => {
    console.log(`listen to server ${PORT}`)
})