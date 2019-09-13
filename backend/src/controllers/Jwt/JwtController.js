const jwt = require('jsonwebtoken');
require('dotenv-safe').load(); //carrega as variaveis ambientes

module.exports = {
    generateToken() {
        const id = 1; //esse id viria do banco de dados
        var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });
        return token;
    },

    verifyToken(token, res) {
        console.log(token);

        if (!token) {
            return 'false';
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) return 'false';

            // se tudo estiver ok, salva no request para uso posterior
            return res.send(decoded);
        });
        return 'false';
    }

}