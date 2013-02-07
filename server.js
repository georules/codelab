var settings = require('./settings');

var mongo = require('mongoskin');
var db = mongo.db('localhost:27017/codelab?auto_reconnect');
var files = db.collection("files");
var request = require('request');

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
app.post('/save', save)
app.post('/save/:file', save)
function save(req,res)	{
	var file = req.params.file;
	var d = req.body.data;
	var t = req.body.type;
	if (file)	{
		
	}
	else	{

	}
}
app.post('/run', function(req,res)	{
	var input = req.body.input;
	var program = req.body.code;
	var post = {
		method:"post",
		json:{code:program,input:input},
		url:settings.exeserver,
	};
	request(post, function(e,r,b)	{
		res.send(b);
	});
});

app.listen(settings.port, function()	{
	console.log("app port", settings.port);
});
