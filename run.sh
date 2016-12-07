#!/bin/sh -ex

cd build && npm run build && cd .. && node server/server.js
