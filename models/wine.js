const mongoose = require('mongoose')

const wineSchema = new mongoose.Schema({
    type: { type: String, enum: ['red', 'white', 'sparkling', 'dessert', 'rose', 'port'], required: true },
    winery: { type: String, required: true },
    wine: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    user: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref:'review'}]
})

module.exports = mongoose.model('wine', wineSchema)