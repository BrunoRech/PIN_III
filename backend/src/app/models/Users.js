module.exports = (sequelize, DataTypes) => {
  
  const Users = sequelize.define('Users', {
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

    type:{
      type: DataTypes.INTEGER
    }
  },{timestamps: false});

  Users.hasMany(sequelize.import('./FavoriteCourses.js'));
  Users.hasMany(sequelize.import('./UserSearches.js'));

  return Users;
}