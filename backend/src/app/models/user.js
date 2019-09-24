module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
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
    },

    tipoUsuario:{
      type: DataTypes.INTEGER
    }
  });

  User.hasMany(sequelize.import('./FavoriteCourse.js'));
  User.hasMany(sequelize.import('./UserSearch.js'));

  return User;
}