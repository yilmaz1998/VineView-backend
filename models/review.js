const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title:{type: String, required:true},
    review:{type: String, required:true},
    user:{type: mongoose.Schema.Types.ObjectId, ref:'user'},
    wine:{type: mongoose.Schema.Types.ObjectId, ref:'wine'}
})


module.exports = mongoose.model('review', reviewSchema)