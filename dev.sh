#!/bin/sh -ex

node server/server.js &
cd build && npm run dev
