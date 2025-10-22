const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes')

const app = express()

app.use(cors({
  origin: 'https://code-reviewer-3-v40k.onrender.com', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app
