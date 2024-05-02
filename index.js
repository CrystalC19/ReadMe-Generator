// TODO: Include packages needed for this application
// created pathways to each folder
const inquirer = require ("inquirer");
const fs = require (`fs`);
const path = require(`path`);


const generateMarkdown = require (`./util/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "Whats the title?",
    name : "Title"
},{ 
     type: "input",
     message: "what is this project about? Give a detailed description",
     name : "Description"
},{
    type: "input", 
    message : "Table of Contents.",
    name : "Table of Contents"
},{
    type: "input",
    message : "What do you need to install to run this app",
    name: "Installation Instructions"
},{
    type: "input",
    message :"How is the App being used? ",
    name: "usage info",
   
},{ //use checkbox and an array for options
    type: "checkbox",
    message: " What license is being used? ",
    name: "License",
    choices: ["MIT","Apache2.0","Boost1.0"]
},{
    type:"input",
    message: "Who contributed to the project?",
    name: "Contribution"
},{
    type: "input",
    message:"What is needed to Test the app",
    name: "Test"
},{
    type: "input",
    message: "Contact Info",
    name: "Questions"

},{
    // add github username
    type: "input",
    message:"Github Username",
    name: "Username"
},{
    type: "input",
    message:"What is your Email?",
    name:"Email Address"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Create ReadMe.md File...");
        writeToFile("./dist/readme.md",generateMarkdown({...responses}) );
      });
};

// Function call to initialize app
init();
