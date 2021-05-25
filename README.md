# COMP5347 Assignment 2

An eCommerce Web Application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to run the application please install the following programs:

- [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- [NodeJS](https://nodejs.org/en/)

### Setting up the database connection

###### Windows machine 
- create directory comp5347/mongodb on the U drive of computer 

- Open a command prompt on your computer and cd into C:/Program Files/MongoDB/Server/3.4/bin

- Run the following command: 

```
mongod.exe --dbpath U:/comp5347/mongodb --smallfiles
```

- You should see the message “waiting for connections on port 27017” on your command prompt. Leave this command prompt open. 

- Open another command prompt and again, cd into C:/Program Files/MongoDB/Server/3.4/bin

- Run the following two commands: 

```
mongoimport --jsonArray --db assignment_data --collection phone_data --file <full-path-to-downloaded-phone-json-file>
mongoimport --jsonArray --db assignment_data --collection user_data --file <full-path-to-downloaded-user-json-file>
```
###### macOS machine 

- create directory comp5347/mongodb on your computer

- Open a terminal and cd into /usr/local/Cellar/mongodb-community/4.4.4/bin

- Run the following command: 

```
mongod --dbpath <path to comp5347/mongodb folder>
```

- Open another terminal and again, cd into /usr/local/Cellar/mongodb-community/4.4.4/bin

- Run the following two commands:

```
mongoimport --jsonArray --db assignment_data --collection phone_data --file <full-path-to-downloaded-phone-json-file>
mongoimport --jsonArray --db assignment_data --collection user_data --file <full-path-to-downloaded-user-json-file>

```

### Installing

- Set up the database as described above.
- If this is the first time running the application run the following command. This will install all of the relevant Node dependencies using npm.
```
npm install
```
- If all of the dependencies are already downloaded run the following commands in separate terminals in order to start the application.
```
npm start
npm run frontend
```
The server is hosted at `localhost:3001`. The frontend is hosted at `localhost:3000`.

## Available Scripts

#### Frontend
```
npm run frontend
```
Runs the frontend on `localhost:3000`.
#### Install
```
npm install
```
Installs all of the required node packages.
#### Build
```
npm run build
```
Builds the front-end application.
#### Start
```
npm start
```
Starts the server on `localhost:3001`.
#### Test
```
npm run test
```
Runs all of the automated tests.


## Running the tests

In order to run the tests run

```
npm run test
```

These tests check that the contents on the various pages are being displayed correctly.
## Deployment

After installing all the dependencies, run the following commands in separate terminals in order to start the application.
```
npm start
npm run frontend
```

## Built With

* [React](https://reactjs.org/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [NodeJS](https://nodejs.org/en/) and [Express](https://expressjs.com/) - The backend frameworks

## Version Control

We use [Git](https://git-scm.com/) and [GitHub](https://github.com/) for version control. 

## Authors

* **Benjamin Gane** - *bgan7208* - [GitHub](https://github.sydney.edu.au/bgan7208)
* **Holly Craig** - *hcra5146* - [GitHub](https://github.sydney.edu.au/hcra5146)
* **Jermaine Janszen** - *jjan3640* - [GitHub](https://github.sydney.edu.au/jjan3640)

## Acknowledgments
### Icons
* Icons style: [https://icons8.com/icons/fluent-systems-regular](https://icons8.com/icons/fluent-systems-regular)
* eCommerce icons: [https://icons8.com/icon/pack/ecommerce/fluent-systems-regular](https://icons8.com/icon/pack/ecommerce/fluent-systems-regular)