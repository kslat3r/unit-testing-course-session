## Mocha/Chai/Supertest workshop

### June 22nd 2018

---

### What we will cover

* Mocha test runner and reporting
* NYC test code coverage tool
* Creating good assertions with Chai
* Mocking functions using Sinon
* Component testing your application using Supertest

*Bear in mind that this is a code-along!*

---

### What this is not

* A best practices class on TDD
* Ideally, tests should be written **before** functionality

---

## Prerequisites

---

* A terminal
* A web browser
* A text editor (Visual Studio Code)
* Node.js v8.9.4
* NPM v5.6.0

*Please double check you have the correct versions of Node/NPM*

---

## Let's go!

---

### Please clone the following repository from Github

#### https://github.com/kslat3r/mocha-chai-supertest-hackathon

* Checkout the branch `step-one`
* Make sure you have a `src/` directory and navigate to it

---

## Starting the microservice

---

### Steps to complete:

* `npm install`
* `npm start`
* `http://localhost:3000/explorer`

---

## Walkthrough of functionality

---

## Introducing our test runner

---

### Steps to complete:

* Install `mocha` test runner
* Install `nyc` code coverage tool
* Add `nyc` configuration in `package.json`
* Reconfigure the `npm test` command to execute the empty spec files with `nyc` and `mocha`

---

## Adding some libraries

---

### Steps to complete:

* Install `sinon`, a mocking library
* Install `chai`, an assertion library

---

## Adding some specs!

---

### Specs to complete:

* filters/todo.spec.js
* mappers/todo.spec.js
* models/user.spec.js
* services/todo.spec.js
* services/user.spec.js

---

## Things to think about

* Use `sinon` where appropriate to mock application dependencies outside of the units
* Use `chai` where appropriate to create assertions against results

---

## Writing some component tests

---

### Steps to complete:

* Install `supertest` HTTP assertion library
* Configure `package.json` with a new NPM script to execute our component tests
* In the directory `src/test/`, write component tests for:
  * `GET /api/users`
  * `GET /api/users/1`
* **BONUS** add the `mochawesome` reporting tool

---

### Thank-you all very much!