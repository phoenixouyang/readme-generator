// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return `[![Apache License Badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU General Public License') {
    return `[![GNU License Badge](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'MIT') {
    return `[![MIT License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'BSD') {
    return `[![BSD License Badge](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === 'Boost') {
    return `[![Boost License Badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === 'Creative Commons') {
    return `[![Creative Commons License Badge](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === 'Eclipse') {
    return `[![Eclipse License Badge](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === 'Mozilla') {
    return `[![Mozilla License Badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'Unilicense') {
    return `[![Unilicense License Badge](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else {
    return '';
  }
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return `[Apache License Link](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU General Public License') {
    return `[GNU License Link](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'MIT') {
    return `[MIT License Link](https://opensource.org/licenses/MIT)`;
  } else if (license === 'BSD') {
    return `[BSD License Link](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === 'Boost') {
    return `[Boost License Link](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === 'Creative Commons') {
    return `[Creative Commons License Link](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === 'Eclipse') {
    return `[Eclipse License Link](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === 'Mozilla') {
    return `[Mozilla License Link](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'Unilicense') {
    return `[Unilicense License Link](http://unlicense.org/)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'N/A') {
    return '';
  } else {
    return `<br />## License <br />This application is covered under the ${license} license. Please click the below link to learn more about it! <br />${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}
  

## Description
${data.description}

<br />
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Features](#features)
* [Contribute](#contribute)
* [Tests](#tests)
* [Questions](#questions)

<br />
## Installation
${data.installation}

<br />
## Usage
${data.usage}

${renderLicenseSection(data.license)}

<br />
## Features
${data.features}

<br />
## Contribute
${data.contribute}

<br />
## Tests
${data.tests}

<br />
## Questions
Want to reach out? You can find me below:
<br />
Github: [${data.username}](https://github.com/${data.username})
<br />
Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
