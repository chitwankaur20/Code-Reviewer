require('dotenv').config()
const app = require('./Backend/src/app.js')

app.listen(3000, ()=> {
    console.log('Server is running on https://code-reviewer-2-nhk3.onrender.com')
 })
