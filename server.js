const express = require('express');

const app = new express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`serving photo app on http://localhost:${port}`);
})