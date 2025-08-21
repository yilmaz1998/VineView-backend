const Wine = require('../models/wine')

const getRedWines = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 20
        const skip = (page - 1) * limit

        const wines = await Wine.find({ type: 'red' })
            .skip(skip)
            .limit(limit)

        const total = await Wine.countDocuments({ type: 'red' })

        res.json({
            wines,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getWhiteWines = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 20
        const skip = (page - 1) * limit

        const wines = await Wine.find({ type: 'white' })
            .skip(skip)
            .limit(limit)

        const total = await Wine.countDocuments({ type: 'white' })

        res.json({
            wines,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getRoseWines = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 20
        const skip = (page - 1) * limit

        const wines = await Wine.find({ type: 'rose' })
            .skip(skip)
            .limit(limit)

        const total = await Wine.countDocuments({ type: 'rose' })

        res.json({
            wines,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getSparklingWines = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 20
        const skip = (page - 1) * limit

        const wines = await Wine.find({ type: 'sparkling' })
            .skip(skip)
            .limit(limit)

        const total = await Wine.countDocuments({ type: 'sparkling' })

        res.json({
            wines,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getDessertWines = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 20
        const skip = (page - 1) * limit

        const wines = await Wine.find({ type: 'dessert' })
            .skip(skip)
            .limit(limit)

        const total = await Wine.countDocuments({ type: 'dessert' })

        res.json({
            wines,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getPortWines = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 20
        const skip = (page - 1) * limit

        const wines = await Wine.find({ type: 'port' })
            .skip(skip)
            .limit(limit)

        const total = await Wine.countDocuments({ type: 'port' })

        res.json({
            wines,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
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