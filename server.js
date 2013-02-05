var settings = require('./settings');
var express = require('express');
var app = express()
	.use(express.bodyParser())
	.use('/static', express.static(__dirname+'/static'));

app.listen(settings.port, function()	{
	console.log("app port", settings.port);
});
