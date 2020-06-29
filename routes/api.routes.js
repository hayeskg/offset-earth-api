const apiRouter = require('express').Router();
const treesRouter = require('./trees.routes');
const endpointsJSON = require('../endpoints.json');
const { send405Error } = require('../errors/errors')

apiRouter
  .use('/trees', treesRouter)
  .all(send405Error);

apiRouter
  .route('/')
  .get((req, res) => { res.status(200).send(endpointsJSON) })
  .all(send405Error);

module.exports = apiRouter;