const handler = require('./handler');

function router(req, res) {
  const endpoint = req.url;
  res.writeHead(200, { 'content-Type': 'text/html' });
  if (endpoint === '/') {
    handler.homePage(req, res);
  } else if (endpoint.includes('public')) {
    handler.serverStaticFile(req, res);
  } else if (endpoint === '/newStories') {
    handler.newStories(req, res);
  } else if (endpoint === '/topStories') {
    handler.topStories(req, res);
  } else if (endpoint === '/bestStories') {
    handler.bestStories(req, res);
  }
}module.exports = router;
