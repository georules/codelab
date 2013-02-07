var settings = require('./settings');

var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/codelab?auto_reconnect');
var files = db.collection("files");

GLOBAL.Handlebars = require('handlebars');
require('./templates/server-templates');

var express = require('express');
var app = express()
	.use(express.bodyParser())
	.use('/static', express.static(__dirname+'/static'));

app.get('/', function(req,res)	{
	var template = Handlebars.templates.lab;
	var html = template({});
	res.send(html);
});
app.post('/', save)
app.post('/:file', save)
function save(req,res)	{
	var d = req.body.data;
	var t = req.body.type;
	if (file)	{
		
	}
	else	{

	}
}

app.listen(settings.port, function()	{
	console.log("app port", settings.port);
});
