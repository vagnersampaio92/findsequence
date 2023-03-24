const request = require('supertest')
const { deleteElementBySequence} = require('../src/controllers/mongoController')

const app = require('../src/app');

const sequences = [["DUHBHB", "DUBUHD", "UBUUHU", "BHBDHH", "DDDDUB", "UDBDUH"],
                    ["DUHDDB", "DUBUHD", "UBUUHU", "BHBDHH", "DDUDUB", "UDBDUH"],
                    ["IUHDDB", "DUBUHD", "UBUUHU", "BHBDHH", " DDUDUB", "UDBDUH"],
                    ["UUHDDB", "DUBUHD", "UBUUHU", "BHBDHH", " DDUDUB", "UDBDUH", "UDBDUH"],
                    ["DUHDDB", "DUBUHD", "UBUUHU"],
                    ["DUHUUB", "DUBUHD", "UBUUHU", "BHBDHH", "DDDDUB", "UDBDUH"]
                ]
describe('Teste Routes', () => {

    afterAll(async () => {
        //apaga tudo para não poluir o banco de dev
        await deleteElementBySequence(sequences);
    });
   
    it('Sequence true', async () => {
        const response = await request(app)
            .post('/sequence')
            .set('Accept', 'application/json')
            .send({
                "letters": sequences[0]
            })
            expect(200)
            expect(response.body.is_valid).toEqual(true);
        
    })

    it('Sequence false', async () => {
        const response = await request(app)
            .post('/sequence')
            .set('Accept', 'application/json')
            .send({
                "letters": sequences[1]
            })
            expect(200)
            expect(response.body.is_valid).toEqual(false);
        
    })
    it('Sequence caractere invalid', async () => {
        const response = await request(app)
            .post('/sequence')
            .set('Accept', 'application/json')
            .send({
                "letters": sequences[2]
            })
            expect(200)
            expect(response.body.is_valid).toEqual(false);
        
    })

    it('Sequence Matrix is ​not square', async () => {
        const response = await request(app)
            .post('/sequence')
            .set('Accept', 'application/json')
            .send({
                "letters": sequences[3]
            })
            expect(200)
            expect(response.body.is_valid).toEqual(false);
        
    })
    it(' sequence retry true', async () => {
        const response = await request(app)
            .post('/sequence')
            .set('Accept', 'application/json')
            .send({
                "letters": sequences[0]
            })
            expect(200)
            expect(response.body.is_valid).toEqual(true);
        
    })
    it('Sequence retry false', async () => {
        const response = await request(app)
            .post('/sequence')
            .set('Accept', 'application/json')
            .send({
                "letters": sequences[1]
            })
            expect(200)
            expect(response.body.is_valid).toEqual(false);
        
    })
    it('Short sequence', async () => {
        const response = await request(app)
            .post('/sequence')
            .set('Accept', 'application/json')
            .send({
                "letters": sequences[4]
            })
            expect(200)
            expect(response.body.is_valid).toEqual(false);
        
    })
    it('sequence false, sequences < 2 ', async () => {
        const response = await request(app)
            .post('/sequence')
            .set('Accept', 'application/json')
            .send({
                "letters": sequences[5]
            })
            expect(200)
            expect(response.body.is_valid).toEqual(false);
        
    })

    it('stats', async () => {
        const response = await request(app)
            .get('/stats')
            expect(200)
            expect(response.body.count_valid).toEqual(1);
            expect(response.body.count_invalid).toEqual(5);
            expect(response.body.ratio).toEqual(0.16666666666666666);
        
    })

})
