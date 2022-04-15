const request = require ('request');
const fs = require ('fs');

const url = process.argv[2];
const path = process.argv[3];

request(url, (reqError, response, body) => {
  if (reqError) {
    console.log('error: ', reqError);
  }
  fs.writeFile(path, body, (reqError) => {
    if (reqError) {
      console.log('path error: ', reqError)
    } else {
      console.log('downloaded file and saved to specified path');

    }
  });

});
