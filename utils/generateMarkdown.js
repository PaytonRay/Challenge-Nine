
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } if (license === 'none') {
        return license = ''
    }
    
}
renderLicenseBadge();


function renderLicenseBadge(license) {
    if (license === 'GNU GPL v3') {
        return license = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
    } if (license === 'none') {
        return license = ''
    }
}
renderLicenseBadge();

function renderLicenseBadge(license) {
    if (license === 'Apache 2.0') {
        return license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } if (license === 'none') {
        return license = ''
    }
}
renderLicenseBadge();


function generateMarkdown(data) {
    return `
# ${data.title}
## **Description** 
${data.description}
## **Table of Contents**
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## **Installation**
${data.installation}
## **Usage**
${data.usage}
## **License**
This project/application is under the ${data.license} license.
## **Contributing**
${data.contributing}
## **Tests**
${data.tests}
## **Questions**
If you have any further questions please feel free to contact me by email or refrencing my GitHub!
my GitHub: https://github.com/${data.github}
My email: ${data.email}
`;
}

module.exports = generateMarkdown;