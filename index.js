const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();
app.set('port',8080);

app.get('/',(req,res)=>{
    res.send("test webPage");
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port')+'에서 대기중...');
});