const express = require('express');
const mongoose = require('mongoose');
const app = express();
const imageRoute = require('./image-route');

app.set('view engine', 'ejs');
app.use(express.json());
app.use('/', imageRoute)

const url = 'mongodb://localhost:27017/myNewDB';
const conn = mongoose.connect(url, () => console.log("Database connected..."));

app.get('/', (req, res) => {
    res.render('index')
});


app.listen(5000, () => console.log("Server running on port 5000"));