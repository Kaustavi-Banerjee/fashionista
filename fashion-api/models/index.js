const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/j',{ useUnifiedTopology: true
, useNewUrlParser: true }, (error)=>{
    if(!error){
        console.log("Connected Yippee..!!");
    }else{
        console.log("Error connecting to database.");
        console.log(error);
    }
});

const user = require("./user.model");
const product = require("./product.model");
