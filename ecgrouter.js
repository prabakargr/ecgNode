var express = require('express');
var ecgController=require('./ecgcontroller');



var ecgRouter = express.Router();  
ecgRouter.route('/get').get(ecgController.get)
module.exports=ecgRouter;