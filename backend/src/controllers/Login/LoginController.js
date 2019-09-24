const JwtController = require('../Jwt/JwtController');

module.exports = {

    login(req, res) {
        if (req.body.email === 'teste' && req.body.password === '123') {
            //auth ok
            const token = JwtController.generateToken();
            return res.status(200).send({ auth: true, token: token });
        }
        return res.status(500).send('Login inválido!');

    },

    teste(req,res){
        const token = req.headers['token'];
        const response = JwtController.verifyToken(token, res);
        console.log(reponse);
        return res.send(response);
    }
}

