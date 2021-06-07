const express = require("express");
const db = require("../db");
const router  = express.Router();

// router.get("/", (req, res) => {
//   db.getAll((items) => {
//     res.json(items);
//   });
// });

router.post("/", (req, res) => {
  const {name} = req.name;
  db.addUser(name, (newItem) => {
    res.json(newItem);
  });
});

module.exports = router;