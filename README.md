# Fullstack Challenge

This is monorepo for fullstack-challenge.

Tech stack:
FE: Reactjs
BE: Nestjs
Framework: Nx framework for managing monorepo

Currently, it has

- portal-web
  - React web application for Fullstack Challenge
- front-api
  - Front api server for Fullstack Challenge

## Development

There are 2 directory you should be aware

- apps
  - all the applications should be here
  - application should not have any business logic. Logic should be placed in libs
- libs
  - all actual implementation should be here.
  - each lib will have application name in prefix except `shared`
  - `shared` lib will have shared code among apps

### Run Development Server

- portal-web
  - `yarn nx run portal-web:serve`
- front-api
  - `yarn nx run front-api:serve`
- all
  - to run both of them: `yarn start`