const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const signUpRouter = require('./routes/signUpRouter')
const loginRouter = require('./routes/loginRouter')
const scheduleRouter = require('./routes/scheduleRouter')

const app = express();
const port = 8080;

mongoose.connect("mongodb://localhost:27017/health", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", function() {
  console.log("DB connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/signup", signUpRouter);
app.use("/login", loginRouter);
app.use("/schedular", scheduleRouter);

app.get("/", (req, res) => {
  res.status(418).send("Hi");
});

app.listen(port, "0.0.0.0",() => {
  console.log(`server is now running ${port}`);
});