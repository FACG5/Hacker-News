const request = require('request');

function requestApi(type, cb) {
  const typeStories = ['newstories', 'topstories', 'beststories'];
  const url = `https://hacker-news.firebaseio.com/v0/${typeStories[type]}.json`;
  request(url, (error, response, body) => {
    if (error) {
      cb(error);
    }
    const arrayOfId = JSON.parse(body);
    const arrayOfItem = [];
    for (let i = 0; i < 10; i += 1) {
      const urlItem = `https://hacker-news.firebaseio.com/v0/item/${arrayOfId[i]}.json`;
      request(urlItem, (errorItem, responseItem, bodyItem) => {
        if (error) {
          cb(error);
        }
        arrayOfItem.push(JSON.parse(bodyItem));
        if (arrayOfItem.length === 10) {
          cb(null, arrayOfItem);
        }
      });
    }
  });
}
module.exports = requestApi;
