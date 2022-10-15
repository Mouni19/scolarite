const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var multer = require('multer'); 
var XLSX = require('xlsx'); 
var morgan = require('morgan');
//const excelToJson = require('convert-excel-to-json');
const db = require('./model/mongoose');
var config = require('./config'); // get our config file

cors = require('cors');
const path = require('path');
app.set('superSecret', config.secret);
const apii = require('./router/user.router');
const apis = require('./router/student.router');
const mapi = require('./router/moddulle.router');
const eapi = require('./router/epreuve.router');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('',apii);
app.use('/student',apis);
app.use('/moddulle',mapi);
app.use('/epreuve',eapi)
app.listen(1337,()=> {
    console.log('SERVER STARTED ON 1337')
})