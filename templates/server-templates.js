(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lab'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!DOCTYPE html>\n<html>\n<head>\n	<meta charset=\"utf-8\"/>\n	<title>Geo's Code Lab</title>\n	<link rel=\"stylesheet\" href=\"/static/css/bootstrap.css\"/>\n	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js\" type=\"text/javascript\"></script>\n	<style type=\"text/css\">\n	textarea {resize:none;height:inherit;width:100%;}\n	.coding{margin-top:40px;display:block;height:500px;}\n	.fill{height:100%;width:100%;display:inline-block;}\n	</style>\n	<link href=\"/static/css/bootstrap-responsive.css\" rel=\"stylesheet\">\n	<link href=\"/static/lib/codemirror/codemirror.css\" rel=\"stylesheet\">\n	<link href=\"/static/lib/codemirror/theme/solarized.css\" rel=\"stylesheet\">\n	<script src=\"/static/lib/codemirror/codemirror.js\" type=\"text/javascript\"></script>\n	<script src=\"/static/lib/codemirror/python.js\" type=\"text/javascript\"></script>\n	</head>\n	<body>\n\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"navbar-inner\">\n        <div class=\"container\">\n          <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </a>\n          <a class=\"brand\" href=\"#\">Geo's Code Lab</a>\n          <div class=\"nav-collapse collapse\">\n            <ul class=\"nav\">\n              <li class=\"active\"><a href=\"#\">Home</a></li>\n              <li><a href=\"#about\">About</a></li>\n              <li><a href=\"#contact\">Contact</a></li>\n            </ul>\n          </div><!--/.nav-collapse -->\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container coding\">\n	<div class=\"row-fluid fill\">\n		<div class=\"span4 codediv fill\">\n			<h2>Input</h2>\n			<textarea class=\"code\" id=\"stdin\"></textarea>\n		</div>\n		<div class=\"span4 codediv fill\">\n			<h2>Program</h2>\n			<textarea class=\"code\" id=\"program\"></textarea>\n			<button class=\"btn btn-primary\" id=\"runit\">Run It &hearts;</button>\n		</div>\n		<div class=\"span4 codediv fill\">\n			<h2>Output</h2>\n			<textarea class=\"code\" id=\"stdout\"></textarea>\n		</div>\n	</div>\n    </div> <!-- /container -->\n\n	<script src=\"/static/js/runcode.js\"></script>\n\n	<script>\n	var editor = CodeMirror.fromTextArea(document.getElementById('program'),\n		{indentUnit:2,matchBrackets:true,lineNumbers:'true',theme:'solarized light',\n			mode:	{name:'python',version:2,singleLineStringErrors:false}\n		});\n	var stdout = CodeMirror.fromTextArea(document.getElementById('stdout'),\n		{indentUnit:2,lineNumbers:'true',theme:'solarized light'});\n	var stdin = CodeMirror.fromTextArea(document.getElementById('stdin'),\n		{indentUnit:2,lineNumbers:'true',theme:'solarized light'});\n	</script>\n\n    <script src=\"/static/js/bootstrap-transition.js\"></script>\n    <script src=\"/static/js/bootstrap-alert.js\"></script>\n    <script src=\"/static/js/bootstrap-modal.js\"></script>\n    <script src=\"/static/js/bootstrap-dropdown.js\"></script>\n    <script src=\"/static/js/bootstrap-scrollspy.js\"></script>\n    <script src=\"/static/js/bootstrap-tab.js\"></script>\n    <script src=\"/static/js/bootstrap-tooltip.js\"></script>\n    <script src=\"/static/js/bootstrap-popover.js\"></script>\n    <script src=\"/static/js/bootstrap-button.js\"></script>\n    <script src=\"/static/js/bootstrap-collapse.js\"></script>\n    <script src=\"/static/js/bootstrap-carousel.js\"></script>\n    <script src=\"/static/js/bootstrap-typeahead.js\"></script>\n\n  </body>\n</html>\n</html>\n";});
})();
