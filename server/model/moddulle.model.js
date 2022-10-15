const mongoose = require("mongoose");
const Epreuve = require('../model/epreuve.model');

const moddulle = mongoose.Schema({
    code_moddulle:{
        type: String,
        required:true,
        min:6,
        max:4
    },
    designation_moddulle: {
        type:String,
        required:true,
        min:6,
        max:25
    },
    coefficient: {
        type:Number,
        required:true             },
    nombre_epreuves: {
        type:Number,
        required:true,
      
    },
    année:{
        type:Number,
        required:true
    },
    list_epreuves:{
        type: Array, 
        default : []
    },
    epreuve_details:[Epreuve]

   });


module.exports = mongoose.model('Moddulle',moddulle);
