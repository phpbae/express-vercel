const express = require('express');
const path = require("path");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(path.join(process.cwd(), 'public')));

app.use(cors({
    origin: ['http://localhost:5173'], // 모든 출처 허용
    credentials: true, // 인증 정보 허용
}));


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