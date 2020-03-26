const knex = require('knex')
const db = require("../../knexfile")

connection = knex(db.development)

module.exports = connection