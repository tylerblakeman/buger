var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();



//static content from the public directory
app.use(express.static("public"));

//app body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting handlebars as the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//importing routes from the controller file and giving the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//starting the server and listening on the port
app.listen(PORT, function() {
    //logging the server's port
    console.log(`Server is listening on http://localhost: ${PORT}`)
});


