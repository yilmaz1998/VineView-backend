const express = require("express")
const app = express()
const cors = require('cors')
require("dotenv").config()
const port = process.env.PORT 
const db = require('./models')

const authRouter = require('./routers/authRouter')
// const favoriteRouter = require('./routers/favoriteRouter')
// const reviewRouter = require('./routers/reviewRouter')
// const wineRouter = require('./routers/wineRouter')

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
// app.use('/favorite', favoriteRouter)
// app.use('/review', reviewRouter)
// app.use('wine', wineRouter)


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})