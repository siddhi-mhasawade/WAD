const express = require('express');
const abc = express();

const path = require("path")

const PORT = 8000

// abc.use(express.static(__dirname+`public`));
// abc.use(express.static('public'));
abc.use(`/static`,express.static("public"))

abc.get('/', function(req,res){
    res.send('Hello world');
});

abc.listen(PORT, function(){

    console.log(`server listening on port::${PORT}`);
});