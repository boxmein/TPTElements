# Closure compiler 
# (May as well expand to java -jar closure.jar ...)
CLOSURE :=closure
# LESS compiler. Install with "npm install -g less".
# Use another value if you don't install globally.
LESSC :=lessc 

JSDIR :=js/
CSSDIR :=css/

LESSFILES= $(wildcard $(CSSDIR)*.less)

all: minify lesscss
lesscss: $(LESSFILES)

# Closure compiles the script files
minify: js/script.js js/luafunctionality.js
	$(CLOSURE) --js $(JSDIR)script.js --js_output_file $(JSDIR)script.min.js
	$(CLOSURE) --js $(JSDIR)luafunctionality.js --js_output_file $(JSDIR)luafunctionality.min.js

%.less: %.css
	$(LESSC) $@ $< -compress
