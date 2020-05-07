# Leaguestatistics
This project is work in progress, and is an SPA written in Angular

Yours truly is an active floorball player. A lot of match data is publicly available on Bandyforbundet's websites. A lot of processed data already exists, such as league standings and top scorer tables. This is however, my representation of the same data, plus a little more. Some tables, lists and also some cool graphs. Individual player data, and evolution throughout the season. A fun way to learn to use Angular in a non-trivial web application. It is also more fun when I actually have some insights in the data I'm processing.

I have scraped these online resources, and parsed it into JSON-objects which I use in further processing. Currently, they are listed as static resources inside this app. Some beautiful day, they will be moved to a backend written in Kotlin. And persist data in a NoSQL-database, or even a graph database. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
