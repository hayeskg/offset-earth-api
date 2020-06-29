const treesJSON = require('../trees.json');

exports.getAllTrees = (req, res, next) => {
  let trees = [...treesJSON];
  res.status(200).send(trees);
}

exports.getAllTrees = (req, res, next) => {
  let trees = [...treesJSON];
  res.status(200).send(trees);
}