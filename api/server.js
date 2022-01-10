// BUILD YOUR SERVER HERE
const express = require('express')
const server = express()
server.use(express.json()) //parse json from requests
const User = require('./users/model')

server.post('/api/users', (req, res) => {
    const { name, bio } = req.body
    User.insert({ name, bio })
    .then(newUser => {
        !newUser.name || !newUser.bio  
        ? res.status(400).json({ message: "Please provide name and bio for the user" })
        : res.status(201).json(newUser) 
        
    })
   .catch(err => {
        res.status(500).json({ message: "There was an error while saving the user to the database" })
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
        user ? res.status(200).json(user) : res.status(404).json({ message: "The user with the specified ID does not exist" })
    })
   .catch(err => {
        res.status(500).json({ message: "The users information could not be retrieved" })
    })
})

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params
    User.remove(id)
    .then(deletedUser => {
        !deletedUser ? res.status(404).json({ message: "The user with the specified ID does not exist"}) : res.status(200).json(deletedUser) 
    })
   .catch(err => {
        res.status(500).json({ message: "The user could not be removed" })
    })
})

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params
    const { name, bio  } = req.body
    User.update( id, { name, bio } )
    .then(updatedUser => {
        if (!updatedUser) {
            res.status(404).json({ message: "The user with the specified ID does not exist" })
        } else {
            if (!req.body.name || !req.body.bio) {
            res.status(400).json({ message: "Please provide name and bio for the user" })
        } else {
            res.status(200).json(updatedUser) 
        }
    }})
   .catch(err => {
        res.status(500).json({ message: "The user information could not be modified" })
    })
})

module.exports = server;