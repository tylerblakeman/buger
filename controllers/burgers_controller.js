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

//api route for adding burgers
router.post("/api/burgers", function (req, res){
  burgers.insertOne(["burger_name"], [req.body.name], function(result){
    res.json({id: result.insertId})
  })
})

//api route for updating the devooured state
router.put("/api/burgers/:id", function (req, res) {
  var condition = `id =  ${req.params.id}`;
  burgers.updateOne(
    {
      devoured: true,
    },
    condition,
    function (result) {
      res.json(result);
    }
  );
});
module.exports = router;