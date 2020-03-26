const connection = require('../database/db')

module.exports = {
    async create(req, res){
        const { id } = req.body

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

        if(!ong){
            res.status(400).json('ONG não encontrada')
        }

        res.json({ong})
    }
}