module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {//TODO add tipoUsuario
    name: {
      type: DataTypes.STRING
    },

    email: {
      type: DataTypes.STRING
    },

    password: {
      type: DataTypes.STRING
    },

    birthDate: {
      type: DataTypes.DATE
    }
  });
  
  return User;
}