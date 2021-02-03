# react-monster

React web application

## rodar apos clonar

- git clone xxx
- cd react-monster
- yarn
- yarn start

# colocar no gitignore

- public folder
- builder

## como este projeto foi criado

- npx create-react-app react-monster
- cd react-monster
- yarn start
  - creates the public folder from the workspace src
  - inject jsx `<app>` into dom `<div id=root>`

## deploy

- yarn build
  -- script added to build and deploy to github pages

## deploy background

- yarn add gh-pages
  - added homepage, prebuild and build into packages
  - pre prefix into script make it runs first
- npm run build
  - creates the optimized build folder
  - babel and webpack

## advanced

- yarn eject

## architecture

- lifting state up

## useful api

- https://jsonplaceholder.typicode.com/users
- https://robohash.org/1?set=set1&size=200x200

## screenshot

## github page

- https://izemauricio.github.io/react-web-monster/
