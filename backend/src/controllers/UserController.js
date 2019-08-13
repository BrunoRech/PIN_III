const { User } = require('../app/models');

module.exports = {
    async getUsers(req, res) {
        return res.send('deu boa');
    },

    async getUserById(req, res) {
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

    }


    /*
    app.get('/users', async (req, res) => {
  const users = await User.findAll(); 
  return res.send(users);
}); 

app.post('/users', (req, res) => {
  try {
    let userName = req.param('name');
    let userEmail = req.param('email');
    let userPassword = req.param('password');
    User.create({name:userName, email:userEmail, password:userPassword});
    return res.send('Sucess');
  } catch (error) {
    return res.send('Error: ' + error);
  }
  
}); // Criar

app.get('/users/:uName', async(req, res) => {
  let uName = req.params.uName;
  const result = await User.findAll({
    where:{
      name: uName
    }
  });
  return res.send(result);
}); //Buscar

app.put('/users/:id', (req, res) => {}); //Editar

app.delete('/users/delete/:uName', async(req, res) => {
  let uName = req.params.uName;
  const result = await User.delete({
    where:{
      name: uName
    }
  });
  return res.send(result);
}); //Deletar
    */
}