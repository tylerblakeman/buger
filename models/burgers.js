var orm = require("../config/orm.js");


//calling orm function using specific input for the ORM

var burgers = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        });
    }
}





module.exports = burgers;
