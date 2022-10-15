const mongoose = require("mongoose");
//const Note = require('../model/note.model');

const resultat = mongoose.Schema({
         
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

const epreuve = mongoose.Schema({
    code_epreuve: {
        type:String,
        required:true,
        min:6,
        max:25
    },
    date_epreuve:{
        type:Date,
        default:Date.now
    },
    année_epreuve:{
        type:Number,
        default:Date.now
    },
    nature_epreuve:{
        type: String  
    },
    note_e:{
        type:[resultat]
    }
            
   });


module.exports = mongoose.model('Epreuve',epreuve);