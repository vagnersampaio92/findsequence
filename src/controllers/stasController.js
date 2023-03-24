const { countResults } = require('./mongoController')

async function index(req, res) {
    const count_valid = await countResults({ "is_valid": true })
    const count_invalid = await countResults({ "is_valid": false })

    res.send({
        "count_valid": count_valid,
        "count_invalid": count_invalid,
        "ratio": calculatesPortion(count_valid, count_invalid)
    })
}
function calculatesPortion(count_valid, count_invalid) {
    return count_valid / (count_invalid + count_valid)
}

module.exports = {
    index
}