const Wine = require('../models/wine')

const getRedWines = async (req, res) => {
    try {
        const wines = await Wine.find({ type: 'red' })
        res.json(wines)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getWhiteWines = async (req, res) => {
    try {
        const wines = await Wine.find({ type: 'white' })
        res.json(wines)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getRoseWines = async (req, res) => {
    try {
        const wines = await Wine.find({ type: 'rose' })
        res.json(wines)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getSparklingWines = async (req, res) => {
    try {
        const wines = await Wine.find({ type: 'sparkling' })
        res.json(wines)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getDessertWines = async (req, res) => {
    try {
        const wines = await Wine.find({ type: 'dessert' })
        res.json(wines)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getPortWines = async (req, res) => {
    try {
        const wines = await Wine.find({ type: 'port' })
        res.json(wines)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getWineById = async (req, res) => {
    try {
        const { type, id } = req.params
        const wine = await Wine.findOne({ _id: id, type: type})
        if (!wine) {
            return res.status(404).json({ message: 'Wine not found' })
        }
        res.json(wine)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    getRedWines,
    getWhiteWines,
    getRoseWines,
    getSparklingWines,
    getDessertWines,
    getPortWines,
    getWineById
}