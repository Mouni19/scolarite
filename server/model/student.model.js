const mongoose = require("mongoose");

const student = mongoose.Schema({
    matricule:{
        type: String
    },
    nom: {
        type:String
    },
    prenom: {
        type:String
    },
    dateNaissance:{
        type:Date
    },
    lieuNaissance:{
        type:String
    },
    nationality:{
        type:String
    },
    firstInscription:{
        type:Date
    },
    bac:{
        type:Date
    },
    gendre:{
        type:String
    },
    type:{
        type:String
            },
    anneeEtude:{
        type:Number
             
    },
    anneeScolaire:{
        type:Date
    }
    
    });


module.exports = mongoose.model('Student',student);
