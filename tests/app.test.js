const request = require('supertest');
const app = require('../app');

describe('app', () => {
  describe('/api', () => {
    test('GET request responds with Status 200 and available endpoints', () => {
      return request(app)
        .get('/api')
        .expect(200)
        .then(({ body }) => {
          expect(typeof body).toBe('object');
        })
    })
    describe('/trees', () => {
      test('GET request responds with status 200 and all tree objects', () => {
        return request(app)
          .get('/api/trees')
          .then(({ body }) => {
            expect(body.treeCount).toBe(4627);
            body.trees.forEach((treeObj) => {
              expect(Object.keys(treeObj))
                .toEqual(expect.arrayContaining([
                  'id',
                  'value',
                  'createdAt',
                  'projectId',
                  'varient'
                ]))
            })
          })
      })
      test('GET request with varient query responds with status 200 and all tree objects of correct varient', () => {
        return request(app)
          .get('/api/trees?varient=normal')
          .then(({ body }) => {
            expect(body.treeCount).toBe(1472);
            body.trees.forEach((treeObj) => {
              expect(treeObj.varient).toBe('normal');
              expect(Object.keys(treeObj))
                .toEqual(expect.arrayContaining([
                  'id',
                  'value',
                  'createdAt',
                  'projectId',
                  'varient'
                ]));
            })
          })
      })
      test('GET request with projectId query responds with status 200 and all tree objects of correct projecId', () => {
        return request(app)
          .get('/api/trees?projectId=113')
          .then(({ body }) => {
            expect(body.treeCount).toBe(1397);
            body.trees.forEach((treeObj) => {
              expect(treeObj.projectId).toBe(113);
              expect(Object.keys(treeObj))
                .toEqual(expect.arrayContaining([
                  'id',
                  'value',
                  'createdAt',
                  'projectId',
                  'varient'
                ]));
            })
          })
      })
    })
  })

})