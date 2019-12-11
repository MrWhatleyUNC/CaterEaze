const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const http = require("http");

mongoose.connect('mongodb://localhost/CaterEaze', {useNewUrlParser: true}, () =>{
  console.log('connected to mongo db')
})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const mainRoutes = require('./routes/main')

app.use(mainRoutes)

const port = 5000;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);