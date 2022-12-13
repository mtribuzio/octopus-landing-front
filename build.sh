#!/usr/bin/env bash
rm -r ../api/public
vue-cli-service build
mv ./dist ../api/public