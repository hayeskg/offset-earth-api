const treesRouter = require('express').Router();

treesRouter.get('/', (req, res) => res.send('Hello from Trees router.'));

module.exports = treesRouter;