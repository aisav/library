//importing js files
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// var morgan = require('morgan');
// var mongoose = require('mongoose');

var config = require('./config');
var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));    //all views are in views folder
app.set('view engine', 'ejs');    //using ejs in the views
app.engine('html', require('ejs').renderFile);    //views has html type

// all files rendered under public dir(home)
app.use(express.static(path.join(__dirname, '/public')));

//for json
app.use(bodyParser.json());
//for parsing any URL, false for only string
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/',index);
app.use('/api',api);

app.listen(config.port, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Listening on port 3000");        
    }
});