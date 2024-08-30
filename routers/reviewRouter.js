const express = require("express")
const router = express.Router()
const reviewController = require('../controllers/reviewController')
const authenticate = require('../middleware/authenticate')

router.post('/new', authenticate, reviewController.createReview)
router.get('/:wineId', reviewController.getReviewByWine)
router.get('/:id/get', authenticate, reviewController.getReviewById)
router.put('/:id', authenticate,reviewController.updateReview)
router.delete('/:id', authenticate, reviewController.deleteReview)

module.exports = router