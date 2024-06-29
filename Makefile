setup:
	npm install tailwindcss -g

build:
	npx tailwindcss -i ./src/input.css -o ./src/output.css  --minify