const mongoose = require('mongoose')
//optei por string para simplificar o processo de verficão de unicidade.
const SequenceSchema = new mongoose.Schema({
    sequence: {
        type: String,
        required: true,
        unique: true
    },
    is_valid: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('sequences', SequenceSchema)
