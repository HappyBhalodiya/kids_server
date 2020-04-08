var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var alphabetscontroller = require('./controller/alphabetscontroller');
var numbercontroller = require('./controller/numberscontroller');
var colorcontroller = require('./controller/colorscontroller');
var shapscontroller = require('./controller/shapscontroller');
require('dotenv').config()
var cors = require('cors');
const fileUpload = require('./middleware/file_upload');


var bodyParser = require('body-parser');         

app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());        
app.use(cors());                            
mongoose.connect('mongodb://localhost:27017/kids_app')
// mongoose.connect("mongodb+srv://kidsapp:kidsapp@cluster0-8buxd.mongodb.net/test?retryWrites=true&w=majority")

console.log("connected");

app.post('/addAlphabets', fileUpload.upload('alphabetsimage'),alphabetscontroller.addAlphabets);
app.get('/getAlphabets',alphabetscontroller.getAlphabets);

app.post('/addNumbers',numbercontroller.addNumbers);
app.get('/getNumbers',numbercontroller.getNumbers);

app.post('/addColors',colorcontroller.addColors);
app.get('/getColors',colorcontroller.getColors);

app.post('/addShapes', fileUpload.upload('shapesimg'),shapscontroller.addShapes);
app.get('/getShapes',shapscontroller.getShapes);

const port = 5000;
app.listen(port);
module.exports = app;

console.log("App listening");
