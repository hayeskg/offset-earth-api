const treesRouter = require('express').Router();
const { getAllTrees } = require('../controllers/trees.controller');

treesRouter.route('/')
  .get(getAllTrees);

module.exports = treesRouter;