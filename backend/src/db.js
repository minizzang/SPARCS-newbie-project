const signUpTemplate = require('./models/SignUpModels');
const PtUserModel = require('./models/PtUser');

function signUpUser(signedUpUser, callback) {
    const newUser = signUpTemplate(signedUpUser)  //이거 맞음?
    newUser.save((error, result) => {
        callback(result);
    })
}

function addUser(name, time1, time2, callback) {
    const newUser = new PtUserModel({
        name,
        time1,
        time2
    });
    newUser.save((error, result) => {
        callback(result);
    })
}

module.exports = {
    signUpUser,
    addUser
};