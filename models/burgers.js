var orm = require("../config/orm.js");
const { updateOne } = require("../config/orm.js");


//calling orm function using specific input for the ORM

var burgers = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        });
    },
    
    insertOne: function(cols, vals, cb){
      orm.insertOne("burgers", cols, vals, function(res){
        cb(res)
      })
    },

    updateOne: function(cols, vals, cb){
      orm.updateOne("burgers", cols, vals, function(res){
        cb(res);
      })
    }
}





module.exports = burgers;
