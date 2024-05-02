// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Descrition
  ${data.descripton}
  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage Info](#usageinfo)
  - [Contribution](#contribution)
  - [Testing](#test)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
 ${data.usageinfo}
  ## License 
  This project is licensed under ${data.license} license.

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Questions
  For any questions regarding this project, input your github ${data.github} and ${data.email}
  

  

`;
}

module.exports = generateMarkdown;
