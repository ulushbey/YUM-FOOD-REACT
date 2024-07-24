#!/bin/bash

# Production

git reset --hard
git checkout master
git pull origin master

npm yarn -g
yarn global add serve
yarn run build
pm2 start "yarn run start:prod" --name=YUM-REACT

# Development

# git reset --hard
# git checkout develop
# git pull origin develop
# npm i
# pm2 start "npm run start:dev" --name=YUM