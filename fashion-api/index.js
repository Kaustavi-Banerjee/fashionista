const connection = require("./models");
const express = require("express");
const application = express();
const path = require("path");
const Handlebars = require('handlebars')
const expresshandlebars = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require("body-parser");
const ProductController = require("./controllers/product");
const UserController = require("./controllers/user");
const AuthController = require("./controllers/auth");
application.use(bodyparser.urlencoded({
    extended:true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expresshandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir: __dirname + "/views/layouts",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

application.set("view engine", "hbs");

application.get("/", (req, res)=>{
    res.render("index",{});
});


application.use("/product", ProductController);
application.use("/user", UserController);
application.use("/auth", AuthController);
application.listen('3000');
