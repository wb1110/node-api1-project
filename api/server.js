// BUILD YOUR SERVER HERE
const express = require('express')
const server = express()
server.use(express.json()) //parse json from requests
const User = require('./users/model')

server.post('/api/users', (req, res) => {

})

server.get('/api/users', async (req, res) => {
    // try {
    //     const users = await User.find()
    //     res.json(users)
    // } catch(err) {
    //     res.status(500).json({ massage: err.message })
    // }
    User.find()
        .then(users => {
            res.json(users)
        })
       .catch(err => {
            res.status(500).json({ message: err.message })
    })
})

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params
    User.findById(id)
    .then(user => {
        res.json(user)
    })
   .catch(err => {
        res.status(500).json({ message: err.message })
})
})

server.delete('/api/users/:id', (req, res) => {
    
})

server.put('/api/users/:id', (req, res) => {
    
})

module.exports = server; // EXPORT YOUR SERVER instead of {}