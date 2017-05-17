////////////////
//DEPENDENCIES//
////////////////
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
//app.use(cors());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

var globalTunnel = require('global-tunnel');

globalTunnel.initialize({
  host: process.env.QUOTAGUARDSTATIC_URL,
  port: 8080
});

app.listen(port, function () {
    console.log('connected to port ', port);
})