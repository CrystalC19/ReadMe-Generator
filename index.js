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
    name : "title"
},{ 
     type: "input",
     message: "what is this project about? Give a detailed description",
     name : "description"
},{
    type: "input", 
    message : "Table of Contents.",
    name : "Table of Contents"
},{
    type: "input",
    message : "What do you need to install to run this app",
    name: "installation"
},{
    type: "input",
    message :"How is the App being used? ",
    name: "usageinfo",
   
},{ //use checkbox and an array for options
    type: "checkbox",
    message: " What license is being used? ",
    name: "license",
    choices: ["MIT","Apache2.0","Boost1.0"]
},{
    type:"input",
    message: "Who contributed to the project?",
    name: "contribution"
},{
    type: "input",
    message:"What is needed to Test the app",
    name: "test"
},{
    // add github username
    type: "input",
    message:"Github Username",
    name: "githubun"
},{
    type: "input",
    message:"What is your Email?",
    name:"email"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Create README.md File...");
        writeToFile("./cc/README.md",generateMarkdown({...responses}) );
      });
};

// Function call to initialize app
init();
