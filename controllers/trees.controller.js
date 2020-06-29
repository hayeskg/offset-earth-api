const treesJSON = require('../trees.json');

exports.getAllTrees = (req, res, next) => {
  const { varient, projectId } = req.query;
  let trees = {};
  if (varient) {
    let tempArr = [...treesJSON];
    let resultArr = [];
    resultArr = tempArr.filter(treeObj => {
      return (treeObj.varient === varient)
    })
    trees = { trees: [...resultArr] };
  } else if (projectId) {
    let tempArr = [...treesJSON];
    let resultArr = [];
    resultArr = tempArr.filter(treeObj => {
      return (treeObj.projectId === projectId)
    })
    trees = { trees: [...resultArr] };
  } else {
    trees = { trees: [...treesJSON] };
  }
  res.status(200).send(trees);
}