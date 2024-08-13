const mongoose = require("mongoose")

const favoriteSchema = new mongoose.Schema({
    wine: {type: mongoose.Schema.Types.ObjectId, ref:'wine'},
    user: {type: mongoose.Schema.Types.ObjectId, ref:'user'}
})

module.exports = mongoose.model('favorite', favoriteSchema)