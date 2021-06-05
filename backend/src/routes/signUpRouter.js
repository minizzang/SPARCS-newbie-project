const express = require('express');
const db = require("../db");  //db에서 정의한 함수들을 여기 라우터에서 사용
const router = express.Router();
const signUpTemplate = require('../models/SignUpModels');

router.post("/", (req, res) => {  //각 route는 server와의 connection이 필요
    console.log("bye")
    const {signedUpUser} = new signUpTemplate({  //user가 회원가입 버튼 누르면 SignUpModels Schema의 instance 생성. 안에 유저가 기입한 contents 넣어주기.
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
    })
    
    db.addUser(signedUpUser, (data) => {
        res.json(data)
        console.log("okay")
    })
})

module.exports = router;