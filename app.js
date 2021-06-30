const express = require('express');
const bodyParser= require('body-parser');

const mongoose= require('mongoose');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app= express();
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true},{useUnifiedTopology:true})
//VALIDATIONS allows us to add parameters to our data
const fruitsSchema = new mongoose.Schema({
    name: {type:String,
        required:[true,"Must have a name"]
    },
    rating:{
        type: Number,
        min:1,
        max:10
    },
    review: String
});

const personSchema= new mongoose.Schema({
    name:String,
    age:Number
})

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid"
});



const Person= mongoose.model("Person", personSchema);

const person= new Person ({
    name:"John",
    age: 37
})


/*
const kiwi= new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit"
});

const orange= new Fruit({
    name: "Orange",
    score:8,
    review: "Very good"
});

const banana= new Fruit({
    name: "Banana",
    score: 10,
    review:"Elite fruit"

});/*
/*
Fruit.insertMany([kiwi,orange,banana], function(err){
    if(err)  {
        console.log(err);
    }else{
        console.log("Successfully saved all the fruits to fruitsDB");
    }
})*/

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{
        
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })//loop through
        mongoose.connection.close()
    }
})

//Updating Data
/*
Fruit.updateOne({_id:"Desired ID"}, {name:"Name to delete"}, function(err){
    if(err){
         console.log(err)
    }else{
        console.log("Successfully updated the document")
    }
})*/

//Deleting data
/*
Fruit.deleteOne({condition}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Document has been successfully deleted");
    }
})
*/
//Deleting many documents
/*
Person.deleteMany({condition}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Items have been successfully deleted");
    }
})
*/




app.get("/", function(req,res) {
	res.send("Hello");
});

app.listen(3000, function() {
console.log("server started on 3000");
})