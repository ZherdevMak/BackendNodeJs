const express = require('express')
const {getUsers, addUser} = require("./repository");
const router = express.Router()



// middleware that is specific to this router
router.get('/', async (req, res) => {
    let users = await getUsers()
    res.send(users)
})
router.get('/:id', async (req, res) => {
    let users = await getUsers()
    const userId = req.params.id
    let user = users.find(u => u.id == userId)
    if (user) {res.send(user)}
    else {
        res.send(404)
    }
})
router.post('/', async (req, res) => {
    let name = req.body.name
    await addUser(name)
    res.send({succes: true})
})

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})


module.exports = router