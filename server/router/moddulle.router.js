const express = require('express');
const routter = express.Router();
const moddulleControler = require('../controler/moddulle.controler');

routter.put('/:id',moddulleControler.setModdulle);
routter.delete('/:code_moddulle',moddulleControler.deletModdulle);
routter.post('/ajoutModdulle',moddulleControler.addModdulle);
routter.get('/:id',moddulleControler.getModdulle);
routter.get('/moddulles',moddulleControler.getModdulle);
routter.get('/moddulless/:designationM',moddulleControler.moddullesss);


module.exports = routter;
