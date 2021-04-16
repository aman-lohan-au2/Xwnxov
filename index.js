var express = require ('express');
var app = express();

var students =require('./students');
var instructors =require('./instructors')

app.locals.objectId = require('mongodb').ObjectID;

 
var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://127.0.0.1:27017',{useNewUrlParser: true},function (err,client) {
    if (err) throw err;
   app.locals.db = client.db('school');
    
});


app.use('/students',students);

app.use('/instructors',instructors);

app.listen(3000)