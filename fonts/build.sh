#!/bin/sh -ex

for fnt in `ls *.ttf`
do
	dir=`echo "$fnt" | sed 's/.ttf//'`
	dir="glyphs/$dir"
	mkdir -p "$dir"
	./node_modules/.bin/build-glyphs "$fnt" "$dir"
done
