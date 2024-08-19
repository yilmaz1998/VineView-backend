const jwt = require("jsonwebtoken")
require('dotenv').config()

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization 


  if (!authHeader) {
    console.log("No token found in the auth header:", authHeader)
    return res.status(401).json({ message: "A token is required." })
  }

    const token = authHeader

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        console.error(error.message)
    }
}

module.exports = authenticate
