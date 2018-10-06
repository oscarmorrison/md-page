concat:
	uglifyjs -c -m -o md-page.js showdown.js script.js -b beautify=false,ascii_only=true
