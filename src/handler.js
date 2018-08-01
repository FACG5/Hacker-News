const fs = require('fs');
const path = require('path');
const requestJson = require('./apiLogic');

function homePage(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'html', 'index.html'), (err, file) => {
    if (err) {
      errorServer(req, res);
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file);
  });
}

function serverStaticFile(req, res) {
  const endpoint = req.url;
  const extenction = endpoint.split('.')[1];
  const types = {
    css: 'text/css',
    html: 'text/html',
    js: 'application/javascript',
  };
  fs.readFile(path.join(__dirname, '..', endpoint), (err, file) => {
    if (err) {
      res.end(err);
    }
    res.writeHead(200, { 'Content-Type': types[extenction] });
    res.end(file);
  });
}

function errorPage(req, res) {
  fs.readFile(path.join(__dirname, '..', 'public', 'html', 'error.html'), (err, file) => {
    if (err) {
      throw new TypeError('somthing wrong with reading file on errorPage');
    }
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(file);
  });
}

function newStories(req, res) {
  requestJson(0, (err, arr) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(err);
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(arr));
  });
}

function topStories(req, res) {
  requestJson(1, (err, arr) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(err));
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(arr));
  });
}

function bestStories(req, res) {
  requestJson(2, (err, arr) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(err);
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(arr));
  });
}

function errorServer(req, res) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('internal server error');
}

module.exports = {
  homePage, serverStaticFile, errorPage, topStories, newStories, bestStories,
};
