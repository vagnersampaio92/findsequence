
const { insert, findOne } = require('./mongoController')

async function index(req, res) {
    const { letters } = req.body
    const alreadyRead = await findOne(JSON.stringify(letters))
    const is_valid = alreadyRead == null ? await newSequence(letters) : alreadyRead.is_valid
    res.send({
        "is_valid": is_valid
    })
}

async function newSequence(matrix) {

    const is_valid = matrix.length >= 4 ? await hasSequence(matrix) : false
    //Fiquei com dúvida se sequencias invalidas, por conterem caracteres fora da regra e matriz não quadrada deveria ser salva no banco, 
    //então tomei a decisão de salvar mesmo se estiverem fora das regras, para termos a estatística mais precisa de quantas sequencias inválidas foram usadas
    await insert(JSON.stringify(matrix), is_valid)
    return is_valid
}


async function hasSequence(matrix) {
    try {
        const matrixLength = matrix.length
        let countSequence = 0
        for (let line = 0; line < matrixLength; line++) {
            //verifica se em algum ponto a Matriz não é quadrada
            if (matrix[line].length == matrixLength) {
                countSequence += await walkColumn(matrix, line)
            } else {
                throw new Error('Matrix is ​not square');
            }

        }
        const is_valid = countSequence >= 2 ? true : false
        return is_valid

    } catch (error) {
        //Tomei a decisão de considerar a sequencia inválida, caso tenha caractere fora da regra ou não seja quadrada
        console.log(error.message)
        return false
    }

}
async function walkColumn(matrix, line) {
    let countSequence = 0
    try {
        for (let column = 0; column < matrix.length; column++) {
            let count = 0
            const currentLetter = matrix[line][column]
            await verifyCaractere(currentLetter)
            countSequence += await directionWalk(matrix, [line, column], currentLetter, count)
        }
        return countSequence
    } catch (error) {
        throw new Error(error.message)
    }
}
async function verifyCaractere(currentLetter) {
        // direções possíveis (horizontal, vertical, diagonal para baixo e direita, diagonal para baixo e esquerda)
        const validLetters = new Set(["B", "U", "D", "H"])
        if (!validLetters.has(currentLetter)) {
            throw new Error('Invalid character');
        }
   
        return true
}
async function directionWalk(matrix, position, currentLetter, count) {
    try {
        let countSequence = 0
        const directions = [[1, 0], [0, 1], [1, 1], [1, -1]]
        await directions.map(async direction => {
            let isSequence = await searchSequence(matrix, position, currentLetter, direction, count)
            if (isSequence) {
                countSequence++
            }
        })
        return countSequence

    } catch (error) {
        throw new Error(error.message)
    }

}

function searchSequence(matrix, position, letter, direction, count) {
    try {
        const [line, column] = position
        if (count === 4) {
            return true
        }

        if (!isValidPosition(matrix, line, column)) {
            return false
        }

        if (getLetter(matrix, line, column) !== letter) {
            return false
        }

        const nextPosition = move(position, direction)
        const nextCount = (getLetter(matrix, line, column) === letter) ? count + 1 : 1
        return searchSequence(matrix, nextPosition, letter, direction, nextCount)
    } catch (error) {
        throw new Error(error.message)
    }
}

function isValidPosition(matrix, line, column) {
    return line >= 0 && line < matrix.length && column >= 0 && column < matrix.length
}

function getLetter(matrix, line, column) {
    try {
        return matrix[line][column]
    } catch (error) {
        throw new Error(error.message)
    }

}

function move(position, direction) {
    const [line, column] = position
    const [dirctionLine, directionColumn] = direction;
    return [line + dirctionLine, column + directionColumn]
}

module.exports = {
    index,
    newSequence,
    hasSequence,
    walkColumn,
    directionWalk,
    verifyCaractere,
    searchSequence,
    isValidPosition,
    getLetter,
    move
}

