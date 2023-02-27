// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { rejects } = require('assert');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: '[required] Enter your project title:',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: '[required] Enter a short description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: '[required] Are there any steps required to install your project? List them here:',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation steps for your project.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: '[required] Enter instructions for the use of your application. Feel free to include examples as well:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter instructions for using your project.')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license used for your application:',
        choices: ['Apache', 'GNU General Public', 'MIT', 'BSD', 'Boost', 'Creative Commons', 'Eclipse', 'Mozilla', 'Unilicense',],
        default: "N/A",
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests that were performed for this application:',
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your application:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Write instructions on how others can contribute to your project:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email where people can reach you for questions about your application:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            throw err
        } else {
            console.log('Your README file has been created!')
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(userInputs => generateMarkdown(userInputs))
    .then(RMdata => writeToFile('README.md', RMdata))
    .catch(err => {console.log(err)});
    
