const {readJSONfromFile, writeJSONtoFile} = require('./fs-utils')
const fs = require('fs')
// const mongoose = require('mongoose');
// main().catch(err => console.log(err))
// main().then(() => {
//     console.log('connected to MongoDB')
// })
//
// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/users');
//
//     // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }

fs.readFile("users.json", function(err, buf) {
    console.log(buf.toString());
});
// let usersSchema = new mongoose.Schema({
//     name: String
// });
// let MyUser = mongoose.model('Ignat', usersSchema);

const addUser = async (name) => {
    let user = new MyUser({name})
    user.save(function(err){
        if(err) console.log(err);
    })
}
const deleteUser = (id) => {
    return MyUser.deleteOne({_id: id})
}
const updateUser = (_id,name) => {
    return MyUser.update({_id},{name})
}

const getUsers = (search) => {
    if (search){
        return MyUser.find({name: new RegExp(search)})
    }
    return MyUser.find()
    }

exports.addUser = addUser
exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.updateUser = updateUser
