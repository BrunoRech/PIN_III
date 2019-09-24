const { Users } = require('../../app/models');

module.exports = {
    async getUsers(req, res) {
        const users = await Users.findAll();
        return res.json(users);
    },

    async getUserById(req, res) {
        const user =  await Users.findAll({
            where: {id: req.params.id}
        });
     
        return res.json(user);
    },

    async postUser(req, res) {
        const user = await Users.create(req.body);
        return res.json(user);
    },

    async editUser(req, res) {
        const {name, password, email} = req.body;
        await Users.update(
            {
                name,
                password,
                email
            },
            {
                where: {id: req.params.id}
            }
        )

        return res.json();
    },

    async deleteUser(req, res) {
        await Users.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send();
    }

}