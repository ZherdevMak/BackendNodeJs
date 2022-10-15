const {getUsers} = require("./repository");

exports.userController = async (req,res) => {
    if (req.method === 'POST') {
       await addU
        ser("Lesha")
        res.write(JSON.stringify({succes: true}))
        res.end()
    } else {
        let users = await getUsers()
        res.write(JSON.stringify(users))
        res.end()
    }
}
