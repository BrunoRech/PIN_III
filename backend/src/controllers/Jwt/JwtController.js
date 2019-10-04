const jwt = require('jsonwebtoken');
require('dotenv-safe').load(); //carrega as variaveis ambientes

module.exports = {
    encrypt(value) {
        const encrypted = jwt.sign({ encrypted:value }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });
        return encrypted;
    },

    verify(encrypted, res) {

        if (!encrypted) {
            return 'false';
        }

        jwt.verify(encrypted, process.env.SECRET, (err, decoded) => {
            if (err) return 'false';

            // se tudo estiver ok, salva no request para uso posterior
            const {encrypted} = decoded;
            return res.json({encrypted: encrypted});
        });
        return 'false';
    }

}