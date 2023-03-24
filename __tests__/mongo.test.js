const { insert, findOne, deleteElementBySequence } = require('../src/controllers/mongoController')

const app = require('../src/app');

const sequences = [["DDDDDD", "DUBUHD", "UBUUHU", "BHBDHH", "DDDDUB", "UDBDUH"],
["UUUUUU", "DUBUHD", "UBUUHU", "BHBDHH", "DDUDUB", "UDBDUH"],
]
describe('Teste mongo', () => {
    beforeAll(async () => {
        //Os testes do Jest rodam em paralelo, esse delay serve para este insert ser contabilizado no teste do stats no routs.test.js, antes que seja apagado do mongo.
        await new Promise((r) => setTimeout(r, 2000));
        //apaga tudo para não poluir o banco de dev
        await deleteElementBySequence(sequences);
    });

    it('insert valid', async () => {
        const insertRes = await insert(JSON.stringify(sequences[0]), true)
        expect(insertRes.sequence).toEqual(JSON.stringify(sequences[0]));
        expect(insertRes.is_valid).toEqual(true)


    })
    it('insert valid Exception', async () => {
        try {
            await insert({}, true)
        } catch (error) {
            expect(error.message).toEqual('sequences validation failed: sequence: Cast to string failed for value \"{}\" (type Object) at path \"sequence\"')
        }

    })

    it('findOne valid', async () => {
        const insertRes = await findOne(JSON.stringify(sequences[0]))
        expect(insertRes.sequence).toEqual(JSON.stringify(sequences[0]))
        expect(insertRes.is_valid).toEqual(true)

    })
    it('findOne valid exception', async () => {
        try {
            await findOne({})
        } catch (error) {
            expect(error.message).toEqual('Cast to string failed for value "{}" (type Object) at path "sequence" for model "sequences"')
        }

    })




})
