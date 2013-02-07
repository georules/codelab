$("document").ready(function() {

$("#runit").click(function()	{
	pdata = {code: $("#program").html()};
	server = "http://ec2-72-44-42-170.compute-1.amazonaws.com:8080/"
	$.getJSON(server,pdata,
	function(data) {
		$("#stdout").html(data);
	});
});

});
