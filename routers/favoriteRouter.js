const express = require("express")
const router = express.Router()
const favoriteController = require('../controllers/favoriteController')
const authenticate = require('../middleware/authenticate')


router.post("/new", authenticate, favoriteController.createFavorite)
router.get("/", authenticate, favoriteController.getFavorite)
router.get("/:id", authenticate, favoriteController.showFavorite)
router.delete("/:id", authenticate, favoriteController.deleteFavorite)


module.exports = router