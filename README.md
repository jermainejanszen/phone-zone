# COMP5347 Assignment 2

An eCommerce Web Application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

 - [Install mongoDB](https://docs.mongodb.com/manual/administration/install-community/)

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```


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

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

In order to run the tests run

```
npm run test
```

These tests check that the contents on the various pages are being displayed correctly.
## Deployment

After running the initial fresh start the app can simply be started by running
```
npm start
```

## Built With

* [React](https://reactjs.org/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Node](https://nodejs.org/en/) and [Express](https://expressjs.com/) - The backend frameworks

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Version Control

We use [Git](https://git-scm.com/) and [GitHub](https://github.com/) for version control. 

## Authors

* **Benjamin Gane** - *bgan7208* - [GitHub](https://github.sydney.edu.au/bgan7208)
* **Holly Craig** - *hcra5146* - [GitHub](https://github.sydney.edu.au/hcra5146)
* **Jermaine Janszen** - *jjan3640* - [GitHub](https://github.sydney.edu.au/jjan3640)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc