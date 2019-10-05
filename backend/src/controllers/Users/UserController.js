const { Users } = require('../../app/models');
const JwtController = require('../Jwt/JwtController');

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
        try {
            let user = req.body;
            const existingUser = await Users.findAll({where: {email: user.email}});
            if(existingUser[0]){
                return res.json(existingUser[0]);
            }
           // const password = JwtController.encrypt(user.password);
            const newUser = {...user, password};
            user = await Users.create(newUser);
            return res.json(user);
        } catch (error) {
            return res.status(500).json({error})
        }
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