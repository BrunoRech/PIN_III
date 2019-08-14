module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
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