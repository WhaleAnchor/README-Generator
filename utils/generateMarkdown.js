module.exports = generateMarkdown;

function renderBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <div id="top"></div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#link-to-the-project">Link To the Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#future-development">Future Development</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

# ${data.title}
${renderBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}


## Description
${data.description}
<p align="right">(<a href="#top">back to top</a>)</p>

## Link To the Project
* [${data.title}](https://github.com/${data.github}/${data.url}/)
<p align="right">(<a href="#top">back to top</a>)</p>

## Usage
${data.usage}
<p align="right">(<a href="#top">back to top</a>)</p>

## Installation
This is the command to install your dependencies:

\`\`\`
${data.installation}
\`\`\`
<p align="right">(<a href="#top">back to top</a>)</p>

## Tests
This is the command to run tests:

\`\`\`
${data.test}
\`\`\`
<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing
${data.contributing}
<p align="right">(<a href="#top">back to top</a>)</p>

## Future Development
${data.future}
<p align="right">(<a href="#top">back to top</a>)</p>



## Contact
Any questions or concerns, don't hesitate to contact me at ${data.email}. 
You can look at more of my work here [https://github.com/${data.github}](https://github.com/${data.github}/).
<p align="right">(<a href="#top">back to top</a>)</p>`;
}

module.exports = generateMarkdown;
