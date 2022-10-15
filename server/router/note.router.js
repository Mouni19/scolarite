const express = require('express');
const routerr = express.Router();
const noteControler = require('../controler/note.controler')

routerr.put('/:id',noteControler.setNote);
routerr.put('/:code_epreuve',noteControler.setMultipleNote);
routerr.delete('/:id',noteControler.deletNote);
routerr.post('/ajoutNote',noteControler.addNote);
routerr.get('/:id',noteControler.getNote);
routerr.get('/',noteControler.getNotes);
routerr.post('/uploadNote',noteControler.addNoteFromExcel);
routerr.get('/note/:nom_etudiant/:prenom_etudiant',noteControler.notesss);
//routerr.get('/studentss?nom=',noteControler.studentsss);
//routerr.get('/:matricule',noteControler.getStudentByMatricule);

module.exports = routerr;