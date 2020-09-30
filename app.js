const express = require('express');
const app = express();
const morgan=require('morgan');

const postRoutes = require('./routes/post');


app.use(morgan("dev"));

app.use('/',postRoutes);

app.listen(3007);