# COMP5347 Assignment 2

An eCommerce Web Application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

 - Install mongoDB 

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

Setting up the database connection
- create directory comp5347/mongodb on the U drive of computer 

- Open a command prompt on your computer and cd into C:/Program Files/MongoDB/Server/3.4/bin

- Run the following command: 

```
mongod.exe --dbpath U:/comp5347/mongodb --smallfiles
```

- You should see the message “waiting for connections on port 27017” on your command prompt. Leave this command prompt open. 

- Open another command prompt and again, cd into 

- Run the following two commands: 

```
mongoimport --jsonArray --db assignment_data --collection phone_data --file <full-path-to-downloaded-phone-json-file>
mongoimport --jsonArray --db assignment_data --collection user_data --file <full-path-to-downloaded-user-json-file>
```


End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

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