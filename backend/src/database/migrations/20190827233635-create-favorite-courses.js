module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('FavoriteCourse',{
      
      UserId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      CourseId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('FavoriteCourse');
  }
};
