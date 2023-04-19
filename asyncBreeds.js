const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    //change return to callback function in order to return data after readFile is complete
    if (!error) callback(data);
    else if (error) {
      callback(undefined);
    }
  });
};

//callback function to print breedInfo when done readFile
const printInfo = (breed) => {
  console.log('Return Value: ', breed);
}

module.exports = breedDetailsFromFile;

