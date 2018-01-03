# Recipe-Book
This is a Single Page Application developed using Angular 4. It manages recipes & ingredients.

App link:
[Recipe Book](https://recipe-book-1.herokuapp.com/)

## Functionality
- Authenticates users via firebase token (Signup/ Login pages).
- Create, Read, Update, Delete operations on recipes & shopping list (which contains ingredients).
- Session maintenance using tokens from firebase by appending each request with the token.

## Features
- Defined routes implementing child routing and lazy loading module (Recipes module).
- Implemented forms module ( using template driven and reactive forms module).
- Defined custom directive (To maintain dropdown list).
- Used Rxjs with observables.
- Implemented Ngrx (Action, Reducer) to maintain a centralized state throughout the application.
- Used HttpClient module to send http request to the firebase backend.
- Implemented Interceptor to intercept each outgoing http request and append it with the firebase token.

## How to use
You need to have node.js installed to be able to run the application.
- Run "npm install" inside this project folder to install all dependencies.
- Make sure you use the latest version of the CLI.
- Run "ng serve" to see the app in action.
