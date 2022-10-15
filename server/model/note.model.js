const mongoose = require("mongoose");

const note = mongoose.Schema({
         
    nom_etudiant:{
        type:String,
        required:true,
    },
    prenom_etudiant:{
        type:String,
        required:true,
    },
    valeure:{
        type:Number,
        required:true,
    }
            
   });


module.exports = mongoose.model('Note',note);