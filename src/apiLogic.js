const request = require('request');

// first argument must be (option:object) or (url:string)
function requestApi(type, cb) { // requestApi requestData requestInformation getData requestInfo
  const typeStories = ['newstories', 'topstories', 'beststories'];
  const url = `https://hacker-news.firebaseio.com/v0/${typeStories[type]}.json`;
  request(url, (error, response, body) => {
    if (error) {
      cb(error);
      // throw new TypeError('something Wrong with api');
    }
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode);
    // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    const arrayOfId = JSON.parse(body);
    const arrayOfItem = [];
    for (let i = 0; i < 10; i += 1) {
      const urlItem = `https://hacker-news.firebaseio.com/v0/item/${arrayOfId[i]}.json`;
      request(urlItem, (errorItem, responseItem, bodyItem) => {
        if (error) {
          cb(error);
        }
        arrayOfItem.push(JSON.stringify(bodyItem));
        if (arrayOfItem.length === 10) {
          cb(null, arrayOfItem);
        }
      });
    }
  });
}
module.exports = requestApi;
