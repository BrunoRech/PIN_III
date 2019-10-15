const JwtController = require('../Jwt/JwtController');
const { Users } = require('../../app/models');

module.exports = {
    //token de autorização
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const data = await Users.findAll({
                where: { email, password }
            });

            if (!data[0]) {
                return res.status(401).json({erro: 'Login Inválido'});
            }
            const { id } = data[0];

            const token = JwtController.encrypt(id);
            return res.status(200).send({ auth: true, token: token });

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    verifyToken(req, res) {
        try {
            const token = req.headers['token'];
            const response = JwtController.verify(token, res);
            return res.send(response);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

}

