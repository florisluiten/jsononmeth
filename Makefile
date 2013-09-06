# All .js compiled into a single one.
compiled=./build/jsonmeth.js

compile:
	find ./source -type f -name "*.js" | xargs cat > $(compiled)

compressed:
	minifier $(compiled)
	
