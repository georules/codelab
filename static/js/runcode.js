$("document").ready(function() {

$("#runit").click(function()	{
	input = stdin.getValue()//$("#stdin").val();
	code = editor.getValue()//$("#program").val();
	pdata = {code: code, input:input};
	store = $(this).text()
	that = this;
	$(this).text("Running...");
	$.ajax({type:"post",
		url:"run",
		data:pdata,
		success: function(data) {
				o = data.stdout + data.stderr;
				stdout.setValue(o);//$("#stdout").val(data.stdout);
				$(that).text(store);
			}, 
		datatype:"json",});
});

});
