const express = require('express');
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/static', express.static(path.join(process.cwd(), 'public')));


app.get('/', (req, res) => {
    res.json('hello express')
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/login', (req, res) => {
    res.json('login success');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listen to server ${PORT}`)
})