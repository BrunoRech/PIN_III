const JwtController = require('../Jwt/JwtController');
const {Users} = require('../../app/models');

module.exports = {
    //token de autorização
    async login(req, res) {
        const {email, password} = req.body;
        try {
            const data =  JSON.stringify(await Users.findAll({
                where: {email: email}
            }));
            if(data.length == 0){
                return res.status(401).send('Login inválido!');
            }
                const auxPassword = JwtController.encrypt(password)
                const {id, password:psw} = data[0];
                console.log(data)
                console.log(auxPassword, psw)
                if(auxPassword !== psw){
                    return res.status(401);
                }
                const token = JwtController.encrypt(id);
                return res.status(200).send({ auth: true, token: token });
            
        } catch (error) {
            console.error(error);
            return res.status(500).send('Algum erro ocorreu');
        }
       

    },

    verifyToken(req,res){
        const token = req.headers['token'];
        const response = JwtController.verify(token, res);
        return res.send(response);
    }

}

