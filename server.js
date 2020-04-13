var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var alphabetscontroller = require('./controller/alphabetscontroller');
var numbercontroller = require('./controller/numberscontroller');
var colorcontroller = require('./controller/colorscontroller');
var shapscontroller = require('./controller/shapscontroller');
var animalscontroller = require('./controller/animalscontroller');
var fruitscontroller = require('./controller/fruitscontroller');
var vegetablescontroller = require('./controller/vegetablescontroller');
var dayscontroller = require('./controller/dayscontroller');
var monthscontroller = require('./controller/monthscontroller');
var vehiclescontroller = require('./controller/vehiclescontroller');

require('dotenv').config()
var cors = require('cors');
const fileUpload = require('./middleware/file_upload');


var bodyParser = require('body-parser');         

app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());        
app.use(cors());        

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)

                    
mongoose.connect('mongodb://127.0.0.1:27017/kids_app').then( () => {
	console.log("connected server")
}).catch( (err) => {
	console.log(err)
})
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

app.post('/addAnimals', fileUpload.upload('animalsimg'),animalscontroller.addAnimals);
app.get('/getAnimals',animalscontroller.getAnimals);

app.post('/addFruits', fileUpload.upload('fruitsimg'),fruitscontroller.addFruits);
app.get('/getFruits',fruitscontroller.getFruits);

app.post('/addVegetables', fileUpload.upload('vegetablesimg'),vegetablescontroller.addVegetables);
app.get('/getVegetables',vegetablescontroller.getVegetables);

app.post('/addDays', fileUpload.upload('daysimg'),dayscontroller.addDays);
app.get('/getDays',dayscontroller.getDays);

app.post('/addMonths', fileUpload.upload('monthsimg'),monthscontroller.addMonths);
app.get('/getMonths',monthscontroller.getMonths);

app.post('/addVehicles', fileUpload.upload('vehiclesimg'),vehiclescontroller.addVehicles);
app.get('/getVehicles',vehiclescontroller.getVehicles);


const port = 5000;
app.listen(port);
module.exports = app;

console.log("App listening");
