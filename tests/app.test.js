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
    })
  })

})