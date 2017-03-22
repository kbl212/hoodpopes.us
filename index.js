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

var request = require('request');

var options = {
    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: 'http://ip.jsontest.com/',
    headers: {
        'User-Agent': 'node.js'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
app.listen(port, function () {
    console.log('connected to port ', port);
})