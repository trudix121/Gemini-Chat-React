const express = require('express')
const app = express()
const cors = require('cors')
const ai = require('./src/ai')
const morgan = require('morgan')
app.use(cors())
app.use(morgan('dev'))

app.use('/ai', ai)



app.listen(3000, ()=>{
    console.log('Server Started')
})