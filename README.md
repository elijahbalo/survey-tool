# Surveyor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## setting up project

clone the repository and cd into the ./surveyor directory, run npm install to install project depedencies

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Pages

App consists of a landing page that routes the user to the survey page

# Solution overview

The survey elements type(radiogroup, matrix....) have been initalized as a list of reusable components in this project are in the /components folder

The reusable components are called conditionally in the survey-item components.

This app uses an external angular module called ngxPagination. This was implemented and used as a pipe in the survey.component.html file.
This was used to limit the number of surveys displayed on the page to avoid scrolling all the way down and for a better UX

Data retreival from the API is carried out by the survey-service.ts in the /services folder

#########################################
