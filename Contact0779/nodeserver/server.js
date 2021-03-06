var express = require("express");
app = express();
port = process.env.PORT || 5000;
mongoose = require("mongoose");
User = require("./api/models/userListModel");
Login = require("./api/models/userListModel");
bodyParser = require("body-parser");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://egci427:egci427@assignment1.5ozkk.mongodb.net/ContactList",
  function (error) {
    if (error) throw error;
    console.log("Successfully connected");
  }
);

const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/userListRoutes");
routes(app);

app.listen(port);

console.log("User List started on : " + port);
