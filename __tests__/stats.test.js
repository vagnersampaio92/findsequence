const {calculatesPortion} = require('../src/controllers/stasController')

describe('Teste stats funtions', () => {
    //considerei o teste de integração do routes.teste.js satisfatório para o index
    it('calculatesPortion function', async () => {
            const response = await calculatesPortion(40, 60)
            expect(response).toEqual(0.4)
  
    })

})
