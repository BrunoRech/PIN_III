const jwt = require('jsonwebtoken');
require('dotenv-safe').load(); //carrega as variaveis ambientes

module.exports = {
    encrypt(value) {
        try {
            const encrypted = jwt.sign({ encrypted: value }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
            return encrypted;
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    verify(encrypted, res) {
        try {
            if (!encrypted) {
                return 'false';
            }

            jwt.verify(encrypted, process.env.SECRET, (err, decoded) => {
                if (err) return 'false';

                // se tudo estiver ok, salva no request para uso posterior
                const { encrypted } = decoded;
                return res.json({ encrypted: encrypted });
            });
            return 'false';
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

}