const connection = require('../database/db')

module.exports = {
    async index(req, res){
        const ong_id = req.headers.authorization

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

            if(incidents.length == 0){
                return res.json({msg: "Nenhum caso encontrado"})
            }

            return res.json(incidents)
    }
}