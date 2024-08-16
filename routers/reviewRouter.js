const express = require("express")
const router = express.Router()
const reviewController = require('../controllers/reviewController')

router.post('/new', reviewController.createReview)
router.get('/:wineId', reviewController.getReviewByWine)
router.get('/:id/get', reviewController.getReviewById)
router.put('/:id', reviewController.updateReview)
router.delete('/:id', reviewController.deleteReview)

module.exports = router