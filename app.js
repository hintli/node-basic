const express = require('express');
const app = express();

const {getPost} = require('./routes/post');


app.get('/',getPost);

app.listen(3006);