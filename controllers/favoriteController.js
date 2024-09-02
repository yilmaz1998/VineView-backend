const Favorite = require('../models/favorite')
const Wine = require("../models/wine")

const createFavorite = async (req, res) => {
    try {
        const { wineId } = req.body
        const userId = req.user.id
        const wine = await Wine.findById(wineId)
        if(!wine) {
            return res.status(404).json({ message: "Wine not found"})
        }
        const existingFavorite = await Favorite.findOne({wine: wineId, user: userId})
        if (existingFavorite) {
            return res.status(400).json({ message: 'This wine is already in your favorites.' })
        }
        const newFavorite = new Favorite({
            wine: wineId,
            user: userId
        })
        await newFavorite.save()
        res.status(201).json(newFavorite)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const getFavorite = async (req, res) => {
    try {
        const currentUser = req.user.id
        const favorites = await Favorite.find({ user: currentUser }).populate('wine')
        res.status(201).json(favorites)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const showFavorite = async (req, res) => {
    try {
        const favoriteId = req.params.id
        const favorite = await Favorite.findById(favoriteId)
        .populate('wine')
        if (!favorite) {
            return res.status(400).json({ error: "Drink not found" })
        }
        res.json(favorite)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const deleteFavorite = async (req, res) => {
    try {
        const deletedFavorite = await Favorite.findByIdAndDelete(req.params.id)
        res.status(201).json(deletedFavorite)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    createFavorite,
    getFavorite,
    showFavorite,
    deleteFavorite
}