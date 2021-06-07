const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const signUpRouter = require('./routes/signUpRouter')
const loginRouter = require('./routes/loginRouter')
const scheduleRouter = require('./routes/scheduleRouter')
const cors = require('cors')

const realdb = require("./db");
const router  = express.Router();

const app = express();
const port = 8080;
app.use(cors());

// app.all('*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://localhost:3000");
//   next();
// });

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

// app.get("/schedular", (req, res) => {
//   realdb.getAll((items) => {
//     res.json(items);
//   });
// });
// app.post("/schedular", (req, res) => {
//     const {name} = req.name;
//     realdb.addUser(name, (newItem) => {
//       res.json(newItem);
//     });
//   });

app.get("/", (req, res) => {
  res.status(418).send("Hi");
});

app.listen(port, "0.0.0.0",() => {
  console.log(`server is now running ${port}`);
});