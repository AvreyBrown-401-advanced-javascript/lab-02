'use strict';

const express = require('express');
const app = express();


const List = require('./lib/list');


app.get('/', requestHandler);
app.use('/docs', express.static('./docs'));

function requestHandler(req,res) {
  res.send('it works');
}


app.listen(3000, () => console.log('Sentence track up : 3000'));
