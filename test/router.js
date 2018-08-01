//const { homePage, serverStaticFile, errorPage } = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
	console.log("is someone now heree?")
            res.writeHead(200, {'content-Type':"text/html"})
        res.end("hello");
  } else if (endpoint.includes('public')) {
    serverStaticFile(req, res);
  } else {
    errorPage(req, res);
  }
};

module.exports = router;
