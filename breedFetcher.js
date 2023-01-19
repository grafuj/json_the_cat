const request = require('request');
const Breed = process.argv[2];

const url = "https://api.thecatapi.com/v1/breeds/search?q=" + Breed;

request(url, (error, response, body) => {
  if (error) {
    console.error('error:', error);
    return;
  }

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("That's not a breed!");
    return;
  }

  // console.log(typeof data) //string, object after parsing
  // console.log(data);
  console.log(data[0].description); //its in an array and we want property description

});
