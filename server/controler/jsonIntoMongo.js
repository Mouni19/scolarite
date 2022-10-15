const connectToBd = require("../model/mongoose");
//const studentModel = require("../model/student.model");
const STUDENT = require("../model/student.model");

STUDENT.collection.insertMany(data,function(err,docs){
    if(err){
        return console.error(err);
    }else{
        console.log("Multiple document inserted to collection");
    };
    

})