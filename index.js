// Imported packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a 
// notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is the url directory of your github project?',
        default: 'github.com/your_username/ -> url_directory'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have',
        choices: ['MIT', 'APACHE', 'GPL3.0', 'BSD3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install your dependencies?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run the tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'future',
        message: 'Are there any plans for future development?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
 
init();
