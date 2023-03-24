const Sequences = require('../models/sequenceModel')

async function insert(matrix, is_valid) {
    try {
        const sequence1 = new Sequences({ "sequence": matrix, is_valid })
        return await sequence1.save()

    } catch (error) {
        throw new Error(error.message)
    }
}
async function findOne(matrix) {
    try {
        const result = await Sequences.findOne({ sequence: matrix })
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}
async function countResults(parameter) {
    try {
        return await Sequences.count(parameter)
    } catch (error) {
        throw new Error(error.message)
    }
}
async function deleteElementBySequence(sequencesLetters) {
    try {
        sequencesLetters.map(async sequenceLetter => {
           return await Sequences.deleteOne({ sequence: JSON.stringify(sequenceLetter) })
        })
    } catch (error) {
        throw new Error(error.message)
    }

}
module.exports = {
    insert,
    findOne,
    countResults,
    deleteElementBySequence
}