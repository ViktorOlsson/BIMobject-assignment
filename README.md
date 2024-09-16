# BIMobjectAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6. and updated to 18.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# How to start the project

This is created and developed using node version 18.19 so using that version or similar are recommended for running the project locally.

To run this project on your local machine simply clone this project from git into a folder on your machine. After that navigate to the project root folder and run the command "npm install" in the folder to install all dependencies. After that the project is run with the "ng serve" command.

It is also possible to use the dockerfile to run the project. The preks of this is that your locally installed node, npm and angular cli versions it not important since it is installed on the container running the application.
In order to start the project using this you need to install docker, run it and run this command
"docker build -t bimobject-assignment . && docker run --name bimobject-assignment -p 4200:4200 bimobject-assignment"
this will build a docker image based on the dockerfile and start the app locally.
