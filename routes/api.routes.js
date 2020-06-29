const apiRouter = require('express').Router();
const treesRouter = require('./trees.routes');
const endpointsJSON = require('../endpoints.json');

apiRouter.use('/trees', treesRouter);

apiRouter.route('/').get((req, res) => { res.status(200).send(endpointsJSON) })

module.exports = apiRouter;