var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var alphabetscontroller = require('./controller/alphabetscontroller');
var numbercontroller = require('./controller/numberscontroller');
var colorcontroller = require('./controller/colorscontroller');
var shapscontroller = require('./controller/shapscontroller');
require('dotenv').config()
var cors = require('cors');

var bodyParser = require('body-parser');         

app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());        
app.use(cors());                            

mongoose.connect("mongodb://localhost:27017/kids_app");
console.log("connected");

app.post('/addAlphabets',alphabetscontroller.addAlphabets);
app.get('/getAlphabets',alphabetscontroller.getAlphabets);

app.post('/addNumbers',numbercontroller.addNumbers);
app.get('/getNumbers',numbercontroller.getNumbers);

app.post('/addColors',colorcontroller.addColors);
app.get('/getColors',colorcontroller.getColors);

app.post('/addShaps',colorcontroller.addShaps);
app.get('/getShaps',colorcontroller.getShaps);
app.listen(5000);
module.exports = app;

console.log("App listening");
