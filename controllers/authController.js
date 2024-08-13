const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()


const createToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const signup = async (req,res) => {
    try {
        const {username, password, mail} = req.body
        const existingUser = await User.findOne({username})
        if(existingUser) {
            return res.status(404).json({ message: `${username} already exists.`})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({username, password: hashedPassword, mail})
        await newUser.save()
        console.log(newUser)
        

        const token = createToken(newUser)
        return res.status(201).json({ token, user: newUser, message: 'User created' })
    } catch (error) {
        console.error(error.message)
    }
}

const login = async (req,res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username }) 
        if (!user) {
            return res.status(404).json({ message: 'Username not found' })
        }
        const correctPassword = await bcrypt.compare(password, user.password)
        if (!correctPassword) {
            return res.status(404).json({ message: 'Passwords are not matching' })
        }

        const token = createToken(user)
        return res.status(201).json({token, user: user, message: 'Logged in' })


    } catch (error) {
        console.error(error.message)
    }
}

module.exports = {
    signup,
    login
}