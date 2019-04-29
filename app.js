var express= require('express');
var ecgRouter= require('./ecgrouter');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');

var db=mongoose.connect("mongodb://ecg:ecg123@ds227146.mlab.com:27146/amruth");


var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, authorization,Accept,x-access-token");
    next();
});
app.listen(8200,function(){
   console.log("running on port 8200");
   
});

app.use('/ecg',ecgRouter);