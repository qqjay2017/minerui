#!/bin/sh

set -e

yarn
yarn release

yarn build
yarn login
yarn publish


echo "Publish completed"