const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [devName, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(devName, github), err => {
    if (err) throw err;
    
    console.log('Portfolio complete! Check out index.html to see the output!')
});