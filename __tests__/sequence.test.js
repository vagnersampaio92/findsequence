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
    it('verifyCaractere function', async () => {

        const response = await verifyCaractere('H')
        expect(response).toEqual(true)

    })

    it('walkColumn function', async () => {

        const response = await walkColumn(sequences, 0)
        expect(response).toEqual(3)

    })

    it('walkColumn function exepction', async () => {
        try {
            const response = await walkColumn(sequences, 10)
            expect(response).toEqual(3)
        } catch (error) {
            expect(error.message).toEqual("Cannot read properties of undefined (reading '0')")
        }


    })

    it('directionWalk function', async () => {

        const response = await directionWalk(sequences, [0,0], "D", 0)
        expect(response).toEqual(1)

    })

})