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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kids_app')
// mongoose.connect("mongodb://localhost:27017/kids_app");
console.log("connected");

app.post('/addAlphabets', function(req, res){alphabetscontroller.addAlphabets});
app.get('/getAlphabets',function(req, res){alphabetscontroller.getAlphabets});

app.post('/addNumbers',function(req, res){numbercontroller.addNumbers});
app.get('/getNumbers',function(req, res){numbercontroller.getNumbers});

app.post('/addColors',function(req, res){colorcontroller.addColors});
app.get('/getColors',function(req, res){colorcontroller.getColors});

// app.post('/addShaps',colorcontroller.addShaps);
// app.get('/getShaps',colorcontroller.getShaps);
// app.listen(5000);
const port = process.env.PORT || 3000;
app.listen(port);
module.exports = app;

console.log("App listening");
