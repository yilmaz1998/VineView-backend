const express = require("express")
const router = express.Router()
const wineController = require('../controllers/wineController')

router.get('/red', wineController.getRedWines)
router.get('/white', wineController.getWhiteWines)
router.get('/rose', wineController.getRoseWines)
router.get('/sparkling', wineController.getSparklingWines)
router.get('/dessert', wineController.getDessertWines)
router.get('/port', wineController.getPortWines)
router.get('/:type/:id', wineController.getWineById)


module.exports = router