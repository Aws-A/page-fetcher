const request = require('request');
const fs = require('fs');

const downloader = function (URL, path) {
console.log('URL', URL)
console.log('path', path)

request(URL, (error, response, body) => {
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(path, body, () => {
    console.log(`Downloaded and saved ${body.length} bytes to ${path}.`);
  })
});

}


const externalURL = process.argv[2]
const filePath = process.argv[3]

downloader(externalURL, filePath)