const express = require('express')
const app = express()
const port = 7500
const users = require('./users-Router')
const cors = require('cors')
const bodyPsrser = require('body-parser')

app.use(bodyPsrser.urlencoded({extended: false}))
app.use(bodyPsrser.json())
app.use(cors())
// app.use('/users', users)
app.get('/tasks', async (req, res) => {
    res.send('tasks')
})

app.use((req, res) => {
    res.send(404)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



