const { Users } = require('../../app/models');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await Users.findAll();
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async getUserById(req, res) {
        try {
            const user = await Users.findAll({
                where: { id: req.params.id }
            });
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async postUser(req, res) {
        try {
            let user = req.body;
            const existingUser = await Users.findAll({ where: { email: user.email } });
            if (existingUser[0]) {
                return res.json(existingUser[0]);
            }
            user = await Users.create(user);
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async editUser(req, res) {
        try {
            const { name, password, email, birthDate } = req.body;
            await Users.update(
                {
                    name,
                    password,
                    email,
                    birthDate,
                },
                {
                    where: { id: req.params.id }
                }
            )

            return res.json({ message: 'success' });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async deleteUser(req, res) {
        try {
            await Users.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.send();
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

}