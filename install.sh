#!/bin/sh -ex

type git 2> /dev/null && git checkout develop || echo "git command not found"

cd ./server && npm install
cd spritezero && npm install
cd ../../ && mkdir -p dist
cd build && npm install
