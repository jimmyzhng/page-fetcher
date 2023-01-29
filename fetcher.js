// Page Fetcher: download resource at the url to the path on your machine

let url = process.argv[2];
let filePath = process.argv[3];

const request = require('request');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);


// Make an http request
const content = request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    process.exit();
  }


  if (!error) {
    console.log('statusCode:', response && response.statusCode);
    write(filePath, body);
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  }

});

const write = (filePath, urlData) => {
  fs.writeFile(filePath, urlData, err => {
    if (err) {
      console.error(err);
      process.exit();
    }
  });
};

