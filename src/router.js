const {
  homePage, serverStaticFile, errorPage, topStories, newStories, bestStories,
} = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    homePage(req, res);
  } else if (endpoint.includes('public')) {
    serverStaticFile(req, res);
  } else if (endpoint === '/topStories') {
    topStories(req, res);
  } else if (endpoint === '/newStories') {
    newStories(req, res);
  } else if (endpoint === '/bestStories') {
    bestStories(req, res);
  } else {
    errorPage(req, res);
  }
};

module.exports = router;
