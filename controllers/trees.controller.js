const treesJSON = require('../trees.json');

exports.getAllTrees = (req, res, next) => {
  let trees = { trees: [...treesJSON] };
  res.status(200).send(trees);
}