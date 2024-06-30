OUTPUT_DIR = public

setup:
	npm install tailwindcss -g

build:
	npx tailwindcss -i ./src/input.css -o ./src/output.css --minify
	mkdir -p $(OUTPUT_DIR)
	cp src/* $(OUTPUT_DIR) -r
	cp images $(OUTPUT_DIR)/images -r
