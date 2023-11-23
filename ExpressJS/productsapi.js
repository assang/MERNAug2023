const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

let Product = null;

function connectDB() {
    mongoose.connect('mongodb://127.0.0.1:27017/testdb')
    .then(() => {
        console.log("Connected to database")
        const productSchema = new mongoose.Schema({
            pname: String,
            price:Number
          });
          Product = mongoose.model('Product', productSchema);
        })
}

const products = [
    {pname: 'Mobile', price: 5000, description: 'Abc product desc', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a546elvcins/gallery/in-galaxy-a54-5g-sm-a546-sm-a546elvcins-535917323?imwidth=480'},
    {pname: 'Desktop', price: 1234, description: 'Abc product desc', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a546elvcins/gallery/in-galaxy-a54-5g-sm-a546-sm-a546elvcins-535917323?imwidth=480'},
    {pname: 'Tablet', price: 23456, description: 'Abc product desc', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a546elvcins/gallery/in-galaxy-a54-5g-sm-a546-sm-a546elvcins-535917323?imwidth=480'},
    {pname: 'Ear phones', price: 2344, description: 'Abc product desc', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a546elvcins/gallery/in-galaxy-a54-5g-sm-a546-sm-a546elvcins-535917323?imwidth=480'},
    {pname: 'Laptop', price: 45678, description: 'Xyz product desc', image: 'https://www.lenovo.com/medias/lenovo-laptops-thinkbook-15-gen-4-15-intel-hero.png?context=bWFzdGVyfHJvb3R8MjE1NzY0fGltYWdlL3BuZ3xoYWMvaGMwLzE0MTMyMjQyMjUxODA2LnBuZ3w5NjQ4YzVmMmYwM2VkZjZkY2UxYTFhNGEwMWI1MWY1YTIyNTM1YzU3OTA1NjQ4NmQzMDM2Y2VlOWVhZDk3ODI3'}
                ]

app.get('/api', (req, res) => {
    res.send("/api, v1.0.0")
})

app.get('/api/products', (req, res) => {

    getProducts = async () => {
        const products = await Product.find();
        res.json(products)
    } 
    getProducts()
})

// accepting url params
app.get('/api/products/:pname', (req, res) => {
    //console.log(req.params)
    res.send(products.filter((product) => product.pname === req.params.pname))
})

// Registration
app.post('/api/products', (req, res) => {
    console.log(req.body.pname, req.body.price)
    const {pname, price} = {...req.body}
    products.push({pname, price})
    res.json(products)
})

app.delete('/api/products', (req, res) => {
    products.pop({pname: req.body.pname, price: req.body.price})
    res.json(products)
})

app.put('/api/products', (req, res) => {
    products[0].pname = req.body.pname
    products[0].price = req.body.price
    res.json(products)
})

app.listen(3001, () => {
    console.log("Server started")
    connectDB();
})