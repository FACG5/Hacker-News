const http = require('http');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const router = require('./router');

http.createServer(router).listen(port, () => {
  console.log(`listening on ${port}`);
});
