////////////////
//DEPENDENCIES//
////////////////
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

express.static(__dirname);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('connected to port ', port);
})