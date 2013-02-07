NODE_PATH ?= ./node_modules
HANDLEBARS_COMPILER = $(NODE_PATH)/handlebars/bin/handlebars
run: \
	all
	sudo node server.js

all: \
	handlebars

handlebars:
	$(HANDLEBARS_COMPILER) templates/*.handlebars > templates/server-templates.js
