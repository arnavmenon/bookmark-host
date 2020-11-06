const express=require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser= require('body-parser');

const PORT = process.env.PORT || 3000;

const app=express();
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

mongoose.connect("mongodb+srv://newuser:yeet123@cluster0.6k5bw.mongodb.net/bookmarker?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true },)
    .then(result=>{app.listen(PORT, console.log(`Server started on port ${PORT}`));})
    .catch(err=>console.log(err));


const mainController = require('./mainController');
app.use('/', mainController); 

