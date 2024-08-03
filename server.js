const express = require("express");

const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//import routes
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes')

//use routes
app.use('/person' , personRoutes);
app.use('/menu', menuItemRoutes);


app.get("/", function (req, res) {
  res.send("order is ready");
});

app.get("/idli", (req, res) => {
  var idliobj = {
    value: true,
    idli: "tasty",
    dosa: "with sambar",
  };
  res.send(idliobj);
});
//comment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on 3000");
});
