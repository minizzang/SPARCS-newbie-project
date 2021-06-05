const express = require('express');
const db = require("../db");
const router = express.Router();
const signUpTemplate = require('../models/SignUpModels');

// router.post("/", (req, res) => {  //각 route는 server와의 connection이 필요
//     signUpTemplate.findOne({email : req.body.email }, (err, user) => {
//         if (err) {
//             console.log("존재 X 이메일");
//             return res.json({
//                 loginSuccess: false,
//                 message: "존재하지 않는 이메일입니다."
//             });
//         }
//         user.comparePassword(req.body.password)
//         .then((isMatch) => {
//             if (isMatch) next()
//             else res.send("Access denied")
//         })
//     })
    
// })

module.exports = router;