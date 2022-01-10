// BUILD YOUR SERVER HERE
const express = require('express')
const server = express()
server.use(express.json()) //parse json from requests
const User = require('./users/model')

server.post('/api/users', (req, res) => {
    const { name, bio } = req.body
    User.insert({ name, bio })
    .then(newUser => {
        !newUser ? res.status(400).json({ message: "Please provide name and bio for the user" }) : res.status(201).json(newUser)
    })
   .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

server.get('/api/users', async (req, res) => {
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
        user ? res.status(200).json(user) : res.status(404).json({ message: "no user" })
    })
   .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params
    User.remove(id)
    .then(deletedUser => {
        !deletedUser ? res.status(404).json({ message: "User has been deleted"}) : res.status(200).json(deletedUser) 
    })
   .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params
    const { name, bio  } = req.body
    User.update( id, { name, bio } )
    .then(updatedUser => {
        updatedUser ? res.status(200).json(updatedUser) : res.status(404).json({ message: "no user" })
    })
   .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

module.exports = server;