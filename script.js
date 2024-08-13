const express = require("express")
const app = express()
const cors = require('cors')
require("dotenv").config()
const port = process.env.PORT 



app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})