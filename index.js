const express = require('express')
const path = require('path')

const app = express()
const port = 80;

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.post('/api/echo', (req, res) => {
    const { text } = req.body;
    const DATE = new Date();
    res.json({ 
        echo: `Ты отправил(а): ${text}`,
        datetime: DATE.getHours() + ':' + DATE.getMinutes(),
    });
})

app.post('/api/math', (req, res) => {
    const { math, math2 } = req.body;
    res.json({ 
        message: `Результат сложения: ${math + math2}`,
    });
})

app.get('/api/message', (req, res) => {
    const DATE = new Date();
    res.json({ 
        message: 'тест',
        datetime: DATE.getHours() + ':' + DATE.getMinutes(), 
    })
})

app.listen(port)