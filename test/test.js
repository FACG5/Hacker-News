const test = require('tape');
const superTest = require('supertest');
const router = require('../src/router');

test('this is test about something', (t) => {
  superTest(router)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'should returns 200');
      t.end();
    });
});

test('test topStories', (t) => {
  superTest(router)
    .get('/topStories')
    .expect(200)
    
    .end((err,res) => {
      console.log(res);
      t.error(err);
      t.end();
    });
});
/*
test('test newStories', (t) => {
  superTest(router)
    .get('/newStories')
    .expect(200)
    .responseType('application/json')
    .end((err) => {
      t.error(err);
      t.end();
    });
});

test('test bestStories', (t) => {
  superTest(router)
    .get('/bestStories')
    .expect(200)
    .responseType('application/json')
    .end((err) => {
      t.error(err);
      t.end();
    });
});
*/