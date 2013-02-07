$("document").ready(function() {

$("#runit").click(function()	{
	code = $("#program").val();
	console.log(code);
	pdata = {code: code};
	$.ajax({type:"post",
		url:"run",
		data:pdata,
		success: function(data) {
				console.log(data);
				$("#stdout").val(data.stdout);
			}, 
		datatype:"json",});
});

});
