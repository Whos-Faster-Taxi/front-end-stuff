const dotenv = require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const homeRoute = require('./routes/index');
const showRoute = require('./routes/show');
// const ejs = require('ejs');

const port = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

// app.set('view engine', 'ejs')
// app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoute);
app.use('/show', showRoute);

app.listen(port, () => console.log('running on port', port));
