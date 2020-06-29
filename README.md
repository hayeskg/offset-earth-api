# Offset Earth API

---

[Offset Earth](https://offset.earth/about) Developer Challenge - Backend implementation.

This mini project exposes a RESTful API built on Node.js and Express to serve up tree data from a JSON file.

## Getting Started

To run the application on a local development machine, clone or fork the project from GitHub: https://github.com/hayeskg/offset-earth-api and follow the instructions below.

### Prerequisites 

* [Node.js](https://nodejs.org/en/download/ ) needs to be installed on the local development machine.

### Run locally

To start the application after download navigate to the directory and run the following commands:
```
npm i -D
```
This will install developer dependencies as outlined in the package.json file.

Once the dependencies are installed, only the following command will be needed:
```
npm run dev
```
This will start the server and run it locally on PORT 9090 - use any compatible client to access the API endpoints (browser with JSON viewer extension, Insomnia or similar).

*Please note [nodemon](https://nodemon.io/) is used to automatically restart the server upon a file change/save.*


To verify correct server functionality by running the test suite simply run:
```
npm test app
```
This will run the test suite making use of [Jest](https://jestjs.io/) and [supertest](https://www.npmjs.com/package/supertest). Automated HTTP requests provide feedback on individiual endpoints and methods - happy paths and edge cases.

## Available endpoints

```
{
  "GET /api": {
    "description": "See the available Offset Earth API endpoints"
  },
  "GET /api/trees": {
    "description": "Serves an array of all tree objects and total trees count, accepts queries",
    "queries": [
      "varient",
      "projectId"
    ],
    "exampleResponse": {
      "trees": [
        {
          "id": 3,
          "value": 8,
          "createdAt": "2019-07-07T01:30:01.308Z",
          "projectId": 891,
          "varient": "normal"
        }
      ],
      "treeCount": 8
    }
  }
}
```

## With additional time...

- A date select query would be implemented - to provide tree objects between specified dates
- More detailed testing of edge cases - combined queries
- Hosting the application in the cloud for easier access
- A storage solution in the form of a database


## Solution by

Kristof Hayes

https://github.com/hayeskg/

https://www.kristofhayes.me/
