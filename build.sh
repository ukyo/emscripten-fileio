#!/bin/sh
emcc -O2 file.c -o file.raw.js --pre-js pre.js
cat header.js file.raw.js footer.js > file.js
