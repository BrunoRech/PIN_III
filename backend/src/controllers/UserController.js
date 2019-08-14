const { User } = require('../app/models');

module.exports = {
    async getUsers(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async getUserById(req, res) {
        const user =  await User.findAll({
            where: {id: req.params.id}
        });
     
        return res.json(user);
    },

    async postUser(req, res) {
        const user = await User.create(req.body);
        return res.send(user);
    },

    async editUser(req, res) {

        const {name, password, email} = req.body;
        await User.update(
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
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send();
    }

}