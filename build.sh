#!/usr/bin/env bash
rm -r ../api/public
npx vue-cli-service build
mv ./dist ../api/public