const signUpTemplate = require('./models/SignUpModels');

function addUser(signedUpUser, callback) {
    const newUser = signUpTemplate(signedUpUser)  //이거 맞음?
    newUser.save((error, result) => {
        callback(result);
    })
}


module.exports = {
    addUser
};