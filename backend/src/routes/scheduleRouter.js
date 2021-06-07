const express = require("express");
const db = require("../db");
const router  = express.Router();

router.get("/", (req, res) => {
  db.getAll((items) => {
    res.json(items);
  });
});

router.post("/", (req, res) => {
  const {name} = req.body.name;
  const {time1} = req.body.time1;
  const {time2} = req.body.time2;
  db.addUser(name, time1, time2, (newUser) => {
    res.json(newUser);
  });
});

// router.post("/getusers", (req, res) => {
//     db.getAll((items) => {
//         res.json(items);
//       });
//   });

module.exports = router;