const express=require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser= require('body-parser');
const path = require('path');
global.appRoot = path.resolve(__dirname);
<<<<<<< HEAD
=======


>>>>>>> 004ab4ed5479035637b32e81dd5e65ccbdc7ce15



const PORT = process.env.PORT || 3001;

const app=express();
//app.set('view engine','ejs');

app.use(express.static("public/build"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//app.use(morgan('dev'));
app.use(function (req, res) {
<<<<<<< HEAD
  res.sendFile("client/build/index.html", { root: __dirname });
=======
  res.sendFile("public/build/index.html", { root: __dirname });
>>>>>>> 004ab4ed5479035637b32e81dd5e65ccbdc7ce15
}); 

const mainController = require('./mainController');
app.use('/bm', mainController); 

/* app.use(function (req, res) {
  res.sendFile("public/build/index.html", { root: __dirname });
}); */


mongoose.connect("mongodb+srv://newuser:yeet123@cluster0.6k5bw.mongodb.net/bookmarker?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true },)
    .then(result=>{app.listen(PORT, console.log(`Server started on port ${PORT}`));})
    .catch(err=>console.log(err));

