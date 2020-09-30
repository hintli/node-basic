const express = require('express');
const app = express();
const morgan=require('morgan');

const {getPosts} = require('./routes/post');

const myMiddleware = (req,res,next) => {
    console.log("deneme");
    next();
}

app.use(morgan("dev"));
app.use(myMiddleware);
app.get('/',getPosts);

app.listen(3006);