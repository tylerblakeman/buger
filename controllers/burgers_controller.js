//imports
var express = require('express');
var router = express.Router(); 
var burgers = require('../models/burgers.js');


//this is where the router goes
router.get("/", function(req,res){
    burgers.all(function(data){
        var handlebarsObject ={
            burger: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject)
    });
});

module.exports = router;