const {addUser, getUsers} = require("./repository");

exports.userController = async (req,res) => {
    if (req.method === 'POST') {
       await addUser("Lesha")
        res.write(JSON.stringify({succes: true}))
        res.end()
    } else {
        let users = await getUsers()
        res.write(JSON.stringify(users))
        res.end()
    }
}
