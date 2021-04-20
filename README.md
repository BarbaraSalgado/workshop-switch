# BLIP-SWITCH | WebdriverIO Workshop

Let's create some automated functional tests using WebdriverIO. Why WebdriverIO?
- Actually uses [Selenium](https://www.selenium.dev/) under the hood, so the API will be very similar;
- It's a JS framework;
- It's user-friendly, easy to install, well documented and has a huge community;
- Also commonly used to test [React](https://reactjs.org/) apps.


## Pre-requisites

* Install Git;
* Install Node.js - this project runs using [Node.js](https://nodejs.org/en/). Please make sure you're using at least node version 12;
* We recommend using a node version manager, such as [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md);
* A terminal and an IDE;
* Have Chrome installed with its latest version (we're using chromedriver for this workshop).



## Setup

### Cloning this project

1. Click on 'Code' and on the dropdown select HTTPS:

   ![image](https://user-images.githubusercontent.com/6171321/114008878-8f161600-985a-11eb-9ce1-345df0050d03.png)

2. Go to your terminal and enter:

     ```git clone https://github.com/BarbaraSalgado/workshop-switch.git```


### Using node.js

Please make sure you're using node version 12 or higher.

Once the project is cloned, you can access the project from your terminal, and in the root of the project just type:

```npm install```


### Testing your installation
After your installation is ready, run the `check` task to validate your setup:

```npm run check```

This should run a quick test and print 'SETUP OK!' on your console - and you're all set!

![image](https://user-images.githubusercontent.com/6171321/114173631-5eec7700-992f-11eb-9969-2e3a43c58deb.png)

You're all set now!


We won't have time on the workshop to debug setups, so please make sure your setup works :)



## How to run tests
### Running all tests
To run all tests, you'll need to run this command on your terminal:

```npx wdio wdio.conf.js```

Don't worry if not all tests are passing, this is part of our workshop. All validations from the file `search.e2e.js` will be failing at first.


### Running a specific test
To run a specfic test suite, you'll need to run this command on your terminal:

```npx wdio wdio.conf.js --spec ./test/specs/test-run.e2e.js```

## Important documentation
Some interesting reads and information you might need to look up this during the workshop:
### Webdriver IO API
https://webdriver.io/docs/api 

### Jasmine
https://jasmine.github.io/tutorials/your_first_suite

### Inspect elements with Chrome
https://developer.chrome.com/docs/devtools/dom/

### Selector cheat sheet
https://cheatography.com/janesh/cheat-sheets/css-selectors-for-selenium-webdriver/
