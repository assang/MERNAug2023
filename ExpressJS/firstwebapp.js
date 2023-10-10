const express = require('express')
const fs = require('fs')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

// middleware
app.use(express.static('public'))
app.use('/static', express.static(path.join("./", 'public')))

function readAndServe(path, res)   
{
    fs.readFile(path,function(err, data)
    {
          res.end(data);
    })
}

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile('./index.html')
})

app.get('/static/contact', (req, res) => {
    const url = req.url;
      const method = req.method;
      
      if(url === "/static/contact") 
      {
          readAndServe("./public/contact.html",res) 
      }
    
      if(url === "/static/about") {
        readAndServe("./public/about.html",res) 
      }
    
    })

app.post('/submit-student-data', (req, res) => {
    let fullName = req.body.firstName + " " + req.body.lastName
    res.send("Name is: " + fullName)
})

app.post('/submit-contact', (req, res) => {
    let request = req.body.question + " <br/> " + req.body.description
    res.send("We received your request with these details : " + request)
})

app.listen(3001, () => {
    console.log("Server is started")
})