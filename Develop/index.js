// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        section: "title",
        message: "[required] Enter your project title:",
    },
    {
        type: "input",
        section: "Description",
        message: "[required] Enter a short description of your project:",
    },
    {
        type: "input",
        section: "Installation",
        message: "[required] Are there any steps required to install your project? List them here:",
    },
    {
        type: "input",
        section: "Usage",
        message: "[required] Enter instructions for the use of your application. Feel free to include examples as well:",
    },
    {
        type: "input",
        section: "Contributing",
        message: "[required] List any contributors for your application, and provide instructions on how others can contribute:",
    },
    {
        type: "input",
        section: "Tests",
        message: "Describe any tests that were performed for this application:",
    },
    {
        type: "list",
        section: "License",
        message: "Choose the license used for your application:",
        choices: ["Apache", "GNU General Public License, MIT", "BSD 2-Clause", "BSD 3-Clause", "Boost", "Creative Commons", "Eclipse", "GNU Affero", "GNU General", "GNU Lesser", "Mozilla", "Unilicense",]
    },
    {
        type: "input",
        section: "username",
        message: "Please enter your Github username:",
    },
    {
        type: "input",
        section: "email",
        message: "Please enter the email where people can reach you for questions about your application:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
