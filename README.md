# Project Title

The project contains automation testing scenarios for a dummy angular website, i used jasmine as a framework along with protractor automation tool that use JavaScript as a programming language, The website contains a simple banking system functions for two users , customer and bank manager.
The customer have the following functions:
Deposite transactions.
Withdrawal transactions.
View all transactions.

The bank manager should be able to do the following:
Create customer.
Create bank account.
View all users.
The project contains a several automation scenario for both user types.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites and installing

first of all you need to download node.js from (https://nodejs.org/en/download/), make sure to restart your machine after this step, 
then Use npm to install Protractor globally with:
```
npm install -g protractor

```
This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

```
webdriver-manager update

```
Now start up a server with:

```
webdriver-manager start

```
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.



## Running the tests
Inside ur terminal and under the file directory run:
```
protractor conf.js
```

### Break down into end to end tests

1- under customer spec file there are two describe sets, the first one contain scenarios that test the three main customer functionality that I mentioned previously,Example 
```
 it('should display a message when making a deposit successfully')
```
the other describe contains scenarios that  tests the customer profile page elements, Example
```
it('should display the selected user inside ')
```
we make our describe based on what to test and the prerequisite for the set of scenarios. 

2- under bank manager spec file there several scenarios test the functionality of bank manager functions (add customer, add account, view all users)
Examples:
```
it('should be able to add customer')
```

```
it('should be able to add account to last customer')
```


## Built With

* [Protractor]
* [jasmine]
* [JavaScript]

## Contributing

Please read [README.md](https://github.com/baraatia/Protractor-Project.git) for details on our code of conduct, and the process for submitting pull requests to us.



## Authors

* **Baraa Alsafady** 

