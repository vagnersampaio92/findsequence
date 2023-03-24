const express = require('express')
const routes = require('./routes/routes')
const mongo = require('./service/mongoConnect')

mongo.conect()

const app = express()
app.use(express.json())
app.use('/', routes);
app.listen(process.env.PORT, () => {
  console.log(`Server started on port `);
});

module.exports = app

///false "letters": ["DUHDDB", "DUBUHD", "UBUUHU", "BHBDHH", " DDUDUB", "UDBDUH"]
// true {
// "letters": ["DUHBHB", "DUBUHD", "UBUUHU", "BHBDHH", "DDDDUB", "UDBDUH"]
// }