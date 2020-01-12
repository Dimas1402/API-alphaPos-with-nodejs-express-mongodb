const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

//Database
mongoose
  .connect("mongodb://127.0.0.1:27017/alpha-pos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connect to database");
  })
  .catch(err => console.error(err));
// dbo.createCollection("customers", function(err, res) {
//   if (err) throw err;
//   console.log("Collection created!");
//   db.close();
// });

//Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Controllers
const alphaControl = require("./Controllers/AlphaControllers");
const alphaJualControl = require("./Controllers/AlphaJualControllers");
const alphaKasirControl = require("./Controllers/AlphaKasirControllers");
//Routes
app.post("/api/alpha/create", alphaControl.create);
app.get("/api/alpha/getData", alphaControl.getData);
app.delete("/api/alpha/delete", alphaControl.delete);
app.put("/api/alpha/update", alphaControl.update);

app.post("/api/alphajual/create", alphaJualControl.create);
app.get("/api/alphajual/get", alphaJualControl.getBarang);
app.delete("/api/alphajual/delete", alphaJualControl.delete);
app.put("/api/alphajual/update", alphaJualControl.update);

app.post("/api/alphakasir/post", alphaKasirControl.post);
//Start Server
app.listen(3005, () => console.log("database start"));
