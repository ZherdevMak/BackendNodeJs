const express = require('express')
const {getUsers, addUser, deleteUser,updateUser} = require("./repository");
const router = express.Router()



// middleware that is specific to this router
router.get('/', async (req, res) => {
    let users = await getUsers(req.query.search)
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
router.delete('/:id', async (req, res) => {
    const userId = req.params.id
    const user = await deleteUser(userId)
    if (user) {
    res.send(204)}
    else {
        res.send(404)
    }
})
router.post('/', async (req, res) => {
    let name = req.body.name
    await addUser(name)
    res.send({succes: true})
})
router.put('/', async (req, res) => {
    let id = req.body.id
    let name = req.body.name
    await updateUser(id,name)
    res.send({succes: true})
})

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})


module.exports = router