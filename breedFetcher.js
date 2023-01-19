const request = require('request');
// const Breed = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {

  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  
  request(url, (error, response, body) => {
    if (error) {
      // console.error('error:', error);
      return callback(error);
    }
    
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback("That's not a breed!");
      return;
    }
    
    
    // console.log(typeof data) //string, object after parsing
    // console.log(data);
    callback(null, data[0].description); //its in an array and we want property description
    return;
  });
};
  
module.exports = {fetchBreedDescription};