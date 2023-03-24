const { newSequence,
    hasSequence,
    walkColumn,
    directionWalk,
    verifyCaractere,
    searchSequence,
    isValidPosition,
    getLetter,
    move } = require('../src/controllers/sequenceController')

const sequences = ["DDDDDD", "DUBUHD", "UBUUHU", "BHBDHH", "DDDDUB", "UDBDUH"]

describe('Teste Sequence funtions', () => {

    it('move function', async () => {
        const position = [1, 1]
        const direction = [1, 1]
        const response = await move(position, direction)
        expect(response).toEqual([2, 2])

    })
    it('getLetter function', async () => {

        const response = getLetter(sequences, 2, 3)
        expect(response).toEqual('U')

    })
    it('getLetter function exception', async () => {
        try {
           getLetter(sequences, 20, 3)
        } catch (error) {
            expect(error.message).toEqual("Cannot read properties of undefined (reading '3')")
        }

    })
    it('isValidPosition function', async () => {

        const response = isValidPosition(sequences, 2, 3)
        expect(response).toEqual(true)

    })
    it('isValidPosition function exception', async () => {
        try {
            isValidPosition(sequences, 20, 3)
        } catch (error) {
            expect(error.message).toEqual("Cannot read properties of undefined (reading '3')")
        }

    })
    it('verifyCaracterefunction', async () => {

        const response = await verifyCaractere('H') 
        expect(response).toEqual(true)

    })

})