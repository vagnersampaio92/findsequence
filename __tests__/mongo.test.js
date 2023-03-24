const request = require('supertest')
const {     insert, findOne, countResults, deleteElementBySequence} = require('../src/controllers/mongoController')

const app = require('../src/app');

const sequences = [["DDDDDD", "DUBUHD", "UBUUHU", "BHBDHH", "DDDDUB", "UDBDUH"],
                    ["UUUUUU", "DUBUHD", "UBUUHU", "BHBDHH", "DDUDUB", "UDBDUH"],
                ]
describe('Teste mongo', () => {
    beforeEach(async () => {
        //apaga tudo para não poluir o banco de dev
        await deleteElementBySequence(sequences);
    });
 
    it('insert valid', async () => {
            const insertRes = await insert(JSON.stringify(sequences[0]), true)
            expect(insertRes.sequence).toEqual(JSON.stringify(sequences[0]));
            expect(insertRes.is_valid).toEqual(true)
            await deleteElementBySequence(sequences);
    })



})