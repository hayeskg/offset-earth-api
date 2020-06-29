const express = require('express');
const app = express();
const apiRouter = require('./routes/api.routes');
const {
  send500Error,
  send405Error,
  send404Error
} = require('./errors/errors')

app.use(express.json());

app.get('/', (req, res) => res.send('Hello Offset Earth!'));

app.use('/api', apiRouter).all(send405Error);

app.all('/*', send404Error);
app.use(send500Error)

module.exports = app;