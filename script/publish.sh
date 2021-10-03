#!/bin/sh

set -e

yarn
yarn release

yarn build

yarn publish


echo "Publish completed"