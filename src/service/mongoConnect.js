const mongoose = require('mongoose')
const requiredir = require('require-dir')

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/matrix-mongo';

async function conect() {
    mongoose.connect(mongoUri,)
        .then(() => console.log('Conectado ao banco de dados'))
        .catch((erro) => console.log('Erro ao conectar ao banco de dados', erro))
      requiredir('../models')
}


module.exports = {
    conect
}

// {useNewUrlParser: true,
//useUnifiedTopology: true}