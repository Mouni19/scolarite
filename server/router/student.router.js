const express = require('express');
const routerr = express.Router();
const studentControler = require('../controler/student.controler')

routerr.put('/:id',studentControler.setStudent);
routerr.delete('/:matricule',studentControler.deletStudent);
routerr.post('/ajoutStudent',studentControler.addStudent);
routerr.get('/:id',studentControler.getStudent);
routerr.get('/',studentControler.getStudents);
routerr.post('/uploadStudent',studentControler.addStudentFromExcel);
routerr.get('/studentss/:nom',studentControler.studentsss);
//routerr.get('/studentss?nom=',studentControler.studentsss);
routerr.get('/:matricule',studentControler.getStudentByMatricule);

module.exports = routerr;