const treesRouter = require('express').Router();
const { getAllTrees } = require('../controllers/trees.controller');
const { send405Error } = require('../errors/errors')

treesRouter.route('/')
  .get(getAllTrees)
  .all(send405Error);

module.exports = treesRouter;