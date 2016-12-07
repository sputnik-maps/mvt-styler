#!/bin/sh -ex

./node_modules/.bin/spritezero svg-sprite ./svg/
./node_modules/.bin/spritezero --ratio=2 svg-sprite@2x ./svg/
./build-png.js

