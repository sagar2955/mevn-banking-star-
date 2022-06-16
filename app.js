const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
require('dotenv').config

const app = express()

var corsOptions = {
    origin:"http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/',()=>{
    resizeBy.json({
        message: "Welcome to bank"
    })
})


const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is up and running ${PORT}`)
})

const db = require("./models")

db.mongoose.connect(db.mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(`Successfully connected to the database`)
})
.catch((err)=>{
    console.log(err)
    process.exit
})