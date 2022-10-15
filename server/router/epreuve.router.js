const express = require('express');
const routeerr = express.Router();
const epreuveControler = require('../controler/epreuve.controler');

routeerr.put('/:id',epreuveControler.setEpreuve);
routeerr.delete('/:code_epreuve',epreuveControler.deletEpreuve);
routeerr.post('/ajoutEpreuve',epreuveControler.addEpreuve);
routeerr.get('/:id',epreuveControler.getEpreuve);
routeerr.get('/epreuves',epreuveControler.getEpreuves);
routeerr.get('/epreuvess/:code_epreuve',epreuveControler.epreuvesss);

module.exports = routeerr;