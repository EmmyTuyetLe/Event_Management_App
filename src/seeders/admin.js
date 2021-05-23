const User = require('../models/user');
const bcrypt = require('bcryptjs');
let password = "admin123";
exports.seedAdmin = () => {
// check if there is an admin account
User.findOne({role:"admin"}, (err,admin) => {
    if(err) throw err
    if(admin) {
        return "admin account already exists"
    }
// if there is not an admin account, create one
User.create({
    firstName:"John",
    lastName: "Smith",
    email: "johnsmith@gmail.com",
    role: "admin"
}, (err, user) => {
    if(err) throw err
bcrypt.genSalt(10, (err, salt) => {
    if(err) throw err
bcrypt.hash(password, salt, (err, hash) => {
    if(err) throw err
    user.password = hash;
    user.save((err, savedUser) => {
        if(err) throw err
        return "admin account created"
    })
})
})
})
})

}
