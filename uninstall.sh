#!/bin/sh -ex

#type git 2> /dev/null && git checkout develop || echo "git command not found"

cd server && rm -rf node_modules
cd spritezero && rm -rf node_modules
cd ../../build && rm -rf node_modules
cd .. && rm -rf dist
