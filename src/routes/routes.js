const sequence = require('../controllers/sequenceController')
const stats = require('../controllers/stasController')
const express = require('express')
const routes = express.Router()

routes.post('/sequence', sequence.index)
routes.get('/stats', stats.index)

module.exports = routes