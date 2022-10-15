const express = require('express');
const router = express.Router();
const userControler = require('../controler/user.controler');

router.put('/:id',userControler.setUser);
router.delete('/:id',userControler.deletUser);
router.post('/login',userControler.loginn);
router.post('/register',userControler.registerr);
router.get('/users',userControler.users);

module.exports = router;