const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
    time1: Date,
    time2: Date
}, { timestamps: true });  //createdAt, updatedAt을 몽고디비가 알아서 관리해 줌.

const PtUserModel = mongoose.model("ptUser", schema)

module.exports = PtUserModel;