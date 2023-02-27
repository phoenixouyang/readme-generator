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
        name: 'Description',
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
        name: 'Installation',
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
        name: 'Usage',
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
        name: 'License',
        message: 'Choose the license used for your application:',
        choices: ['Apache', 'GNU General Public License, MIT', 'BSD', 'Boost', 'Creative Commons', 'Eclipse', 'GNU', 'Mozilla', 'Unilicense',],
        default: "N/A",
    },
    {
        type: 'checkbox',
        name: 'Other',
        message: 'Please select any other sections you would like to include in your README file',
        choices: [
            {
                name: 'Credits',
                checked: false,
            },
            {
                name: 'Tests',
                checked: false,
            },
            {
                name: 'Features',
                checked: false,
            },
            {
                name: 'Contribute',
                checked: false,
            },
            {
                name: 'Questions',
                checked: false,
            }
        ]
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List the github username of any collaborators for your application (please separate multiple users with a space):',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('Please enter the github username of any collaborators your project.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Describe any tests that were performed for this application:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please describe any tests performed for your project.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Features',
        message: 'Describe list the features of your application:',
        validate: featuresInput => {
            if (featuresInput) {
                return true;
            } else {
                console.log('Please list the features of your project.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Contribute',
        message: 'Write instructions on how others can contribute to your project:',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please write how others can contribute to your project project.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github username:',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your github username.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email where people can reach you for questions about your application:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email.')
                return false;
            }
        },
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
    
