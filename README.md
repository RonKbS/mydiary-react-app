# mydiary-react-app
[![Build Status](https://travis-ci.com/RonKbS/mydiary-react-app.svg?branch=develop)](https://travis-ci.com/RonKbS/mydiary-react-app)
[![Maintainability](https://api.codeclimate.com/v1/badges/93831916ca35661e2c32/maintainability)](https://codeclimate.com/github/RonKbS/mydiary-react-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/93831916ca35661e2c32/test_coverage)](https://codeclimate.com/github/RonKbS/mydiary-react-app/test_coverage)

The MyDiary app is an online private diary. 
The application in this repository uses react to recreate the mydiary application

# Getting started
Clone the repository and open a terminal from the root folder containing the `index.js` file.

### Prerequisites
If you are using iOS, you should have developer tools installed. Download and install `XCode` to proceed otherwise.<br>
Install node.js and npm as instructed [here](https://blog.teamtreehouse.com/install-node-js-npm-mac).<br>

If you are using windows OS, install node.js and npm as instructed [here](https://blog.teamtreehouse.com/install-node-js-npm-windows)



### `npm install`
Run this to install dependencies.

### `npm run-script dev`

Runs the app in the development mode.<br>
Tests are started before the application is started.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The site will reload if you make edits to `.js` files and save them.<br>
You will also see any eslint errors and warnings in the console.

## File organization
```
.
├── .circleci
│   └── config.yml
├── .eslintrc.json
├── .gitignore
├── .travis.yml
├── README.md
├── app.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── actions
    │   ├── types.js
    │   └── userActions.js
    ├── assets
    │   └── dariusz-sankowski-56727-unsplash.jpg
    ├── components
    │   ├── Dashboard.js
    │   ├── Login.js
    │   ├── RegisterUser.js
    │   ├── landingPage
    │   │   ├── Footer.js
    │   │   └── LandingPage.js
    │   └── notFound
    │       └── NotFound.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reducers
    │   ├── rootReducer.js
    │   └── userReducer.js
    ├── routes
    │   └── index.js
    ├── setupTests.js
    ├── store.js
    └── tests
        ├── App.test.js
        ├── actions
        │   └── userActions.test.js
        ├── components
        │   ├── Dashboard.test.js
        │   ├── Login.test.js
        │   └── RegisterUser.test.js
        ├── index.test.js
        ├── reducers
        │   └── userReducer.test.js
        └── routes
            └── index.test.js
```
## Deployment

API hosted at:<br>
https://mydiary-react-app.herokuapp.com/

## Built With
### [React](https://reactjs.org/)

