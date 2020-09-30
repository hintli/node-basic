const express = require('express');
const app = express();


app.get('/' , (req,res) => {
    res.send("Hello my friend");
})

app.listen(3005);