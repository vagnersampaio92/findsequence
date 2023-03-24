const express = require('express')
const routes = require('./routes/routes')
const mongo = require('./service/mongoConnect')
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
mongo.conect()

const app = express()
app.use(express.json())
app.use('/', routes);
app.listen(process.env.PORT, () => {
  console.log(`Server started on port `)
})

module.exports = app