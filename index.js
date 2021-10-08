const dotenv = require("dotenv").config()
const express = require('express')
const cors = require('cors')
const server = express()

const port = process.env.PORT || 9000

server.use(cors())
server.use(express.json())

server.get('/api/hello', (req,res)=> {
    res.status(200).json({message:"Api is working"})
})
server.use('*',(_,res)=>{
    res.send(`<h1>Hello from the API 🙃 <h1>`)
})

server.use((err,req,res,next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

server.listen(port, ()=>{
    console.log(`Server alive on port ${port}`)
})

