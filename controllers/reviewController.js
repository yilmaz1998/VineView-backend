const Wine = require('../models/wine')
const Review = require('../models/review')


const createReview = async (req, res) => {
    try {
        const { wineId, title, review } = req.body
        const newReview = new Review({
            title: title,
            review: review,
            user: req.user.id,
            wine: wineId
        })
        await newReview.save()
        await Wine.findByIdAndUpdate(wineId, { $push: {reviews: newReview._id}})
        res.status(201).json(newReview)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const getReviewByWine = async (req, res) => {
    try {
        const reviews = await Review.find({ wine: req.params.wineId }).populate('user')
        res.json(reviews)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}



const getReviewById = async (req, res) => {
    try {
        const reviewId = req.params.id
        const review = await Review.findById(reviewId)
        if (!review) {
            return res.status(400).json({ error: "Review not found" })
        }
        res.status(200).json(review)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}



const updateReview = async (req, res) => {
    try {
        const { title, review } = req.body
        const reviewId = req.params.id

        const existingReview = await Review.findById(reviewId)

        if (!existingReview) {
            return res.status(404).json({ message: "Review not found." })
        }

        if (existingReview.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to update this review." })
        }

        const updatedReview = await Review.findByIdAndUpdate(
            reviewId,
            { title, review },
            { new: true }
        )

        res.json(updatedReview)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}



const deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id

        const review = await Review.findById(reviewId)

        if (!review) {
            return res.status(404).json({ message: "Review not found" })
        }

        if (review.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to delete this review." });
        }

        const deletedReview = await Review.findByIdAndDelete(reviewId)

        res.status(200).json(deletedReview)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    createReview,
    getReviewByWine,
    getReviewById,
    updateReview,
    deleteReview
}