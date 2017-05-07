#!/bin/bash

node-gyp rebuild --target=1.6.6 --dist-url=https://atom.io/download/electron && mv ./build/Release/mac-bundle-util.node ./mac-bundle-util.node
