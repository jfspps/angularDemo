# Angular Dev #

Install `nodeJS` and `npm` by following the instructions from [here](https://github.com/nodesource/distributions/blob/master/README.md#debinstall).

Then install Angular Command Line Interface (CLI) by running these commands:

`sudo npm uninstall -g angular-cli @angular/cli` 

`npm cache verify` 

`sudo npm install -g @angular/cli`

Navigate to a directory where the Angular projects can be saved.

## Building new projects ##

Angular CLI creates a new directory and stores the prequisite files along with it. Use the following to build a new project:

`ng new project_name`

The files will be stored in a directory (based on the current console working directory) `project_name`. Navigate to the folder (git should already be initialised at this point too) and run `ng serve`. Angular uses port 4200 by default, use `http://localhost:4200/` in a browser.

## Edit default Angular project ##

Navigate to `/src/app/` and edit `appcomponent.html`. Changes to this file are automatically applied without restarting the server. `CTRL-C` to exit the server.

## Appcomponent.ts ##

This iss found in `/src/app` and can list the app components given in `appcomponent.html` (they are enclosed in `{{ }}`). An added component to the list and then initialising it can be then be bound to the single HTML file.

## Bootstrap styling ##

Use `npm` to install Bootstrap 3 (version 4 still experimental at this stage) with `npm i boostrap@3`. Then add `@import '~bootstrap/dist/css/bootstrap.min.css';` to [style.css](./src/styles.css).

## Visual Studio Code watchers ##

Go [here](https://code.visualstudio.com/docs/setup/linux) to raise the limit of file changes (watchers) while running `ng serve`.