const {readJSONfromFile, writeJSONtoFile} = require('./fs-utils')
const fs = require('fs')
fs.readFile("users.json", function(err, buf) {
    console.log(buf.toString());
});
const addUser = async (name) => {
    let users = await getUsers()
    users.push({name} )
    return  writeJSONtoFile("users.json",users)
}

const getUsers = () => {
    return readJSONfromFile('users.json')
    }

exports.addUser = addUser
exports.getUsers = getUsers