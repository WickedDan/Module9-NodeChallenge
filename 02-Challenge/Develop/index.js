// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");



// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What's the title?",
        name:"title",
    },
    {
        type:"input",
        message:"Description?",
        name:"description",
    },
    {
        type:"input",
        message:"Installation Instructions?",
        name:"install",
    },
    {
        type:"input",
        message:"Usuage Information?",
        name:"info",
    },
    {
        type:"input",
        message:"Contribution Guidelines?",
        name:"guide",
    },
    {
        type:"input",
        message:"Test Instructions?",
        name:"test",
    },
    {
        type:"list",
        message:"License?",
        name:"license",
        choices: ["MIT", "Unlicense", "None"],
    },
    {
        type:"input",
        message:"GitHub?",
        name:"github",
    },
    {
        type:"input",
        message:"Email?",
        name:"email",
    },

];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}




// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        fs.writeFileSync("readme.md", `
# ${answers.title}
## Description
${answers.description}
## Installation
${answers.install}
## Usuage Information
${answers.info}
## Contribution Guidelines
${answers.guide}
## Test Instructions
${answers.test}
## License
![license](https://img.shields.io/badge/${answers.license}-License-blue)
## Questions 
If you have questions check out my github ${answers.github} or you can email me at ${answers.email};

            `)
    })
}




// Function call to initialize app
init();
