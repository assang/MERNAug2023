const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
var usersRouter = require('./controllers/users')

const app = express()

app.use(express.json()); //Middleware tells app to use json
app.use(cors())
app.use('/users/',usersRouter)

// Connect to database
mongoose.connect("mongodb://127.0.0.1:27017/testnewdb");

app.listen(3001, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3001);
});