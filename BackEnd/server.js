//Main server ti get data, need to install express
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');//install cors and add here
const bodyParser = require("body-parser");//Body parser
const mongoose = require('mongoose');//Mongoose
const path = require('path');

//To get all the requests
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});//end of app use

//Config for html
app.use(express.static(path.join(__dirname,'../build')));

//Find static folder
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));

//Pasre application json
app.use(bodyParser.json());

//Mongoose connect
const myConnectionString = 'mongodb+srv://aunjila:Granular76@cluster0.xfarq.mongodb.net/cars?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//create a new database schema
var Schema = mongoose.Schema;
var carSchema = new Schema({
    title: String,
    year: String,
    poster: String
});//End of schema

//use the schema to create a new "car" database model.
var CarModel = mongoose.model('car', carSchema);

//Send req for cars and get data back
app.get('/api/cars', (req, res) => {
    //To test if it works
    // const mycars = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     }
    // ];
    //Find car model
    CarModel.find(function (err, data) {
        console.log(data);
        res.json(data);
    });

    // res.status(200).json({
    //     message: "Everything is good",
    //     cars: mycars
    // });//End of status

})//End of Api cars

//Get method
app.get('/api/cars/:id', (req, res, next) => {
    console.log(req.params.id);

    CarModel.findById(req.params.id, (err, data) => {
        res.json(data);
    });
})//End of get

//Put method
app.put('/api/cars/:id', (req, res) => {
    console.log("Update Car " + req.params.id);
    console.log(req.body);

    CarModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})//End of put

// Delete method
app.delete('/api/cars/:id', (req, res) => {
    console.log("Delete Car: " + req.params.id);

    CarModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })//End of findbydelete
})//End of delete

//Post method
app.post('/api/cars', (req, res) => {
    console.log('Car Received!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    CarModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    });
    res.send('Car added');
})//End of Post

//Get html index file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
  })
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})