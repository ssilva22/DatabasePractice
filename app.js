const express = require('express');
const bodyParser= require('body-parser');

const mongoose= require('mongoose');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app= express();
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true},{useUnifiedTopology:true})

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid"
});

fruit.save();



app.get("/", function(req,res) {
	res.send("Hello");
});

app.listen(3000, function() {
console.log("server started on 3000");
})