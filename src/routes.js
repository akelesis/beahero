const express = require('express')

const ong = require('./controller/ongs')
const incident = require('./controller/incidents')
const profile = require('./controller/profile')
const session = require('./controller/session')

const routes = express.Router()

routes.get('/ongs', ong.index)
routes.post('/ongs', ong.create)

routes.get('/profile', profile.index)

routes.post('/sessions', session.create)

routes.get('/incidents', incident.index)
routes.post('/incidents', incident.create)
routes.delete('/incidents/:id', incident.delete)

module.exports = routes