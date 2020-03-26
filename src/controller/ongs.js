const connection = require('../database/db')
const crypto = require('crypto')

module.exports = {
    async index(req, res){
        const ongs = await connection('ongs')
            .select('*')
    
        return res.json(ongs)
    },
    async create(req, res){
        const ong = req.body
    
        ong.id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id: ong.id,
            name: ong.name,
            email: ong.email,
            whatsapp: ong.whatsapp,
            city: ong.city,
            uf: ong.uf
        })
            .catch((err) => {console.log(err)})


        return res.json(ong.id)
    }
}