$("document").ready(function() {

$("#runit").click(function()	{
	input = $("#stdin").val();
	code = $("#program").val();
	pdata = {code: code, input:input};
	store = $(this).text()
	that = this;
	$(this).text("Running...");
	$.ajax({type:"post",
		url:"run",
		data:pdata,
		success: function(data) {
				$("#stdout").val(data.stdout);
				$(that).text(store);
			}, 
		datatype:"json",});
});

});
