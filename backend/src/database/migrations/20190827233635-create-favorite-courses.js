module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('FavoriteCourses',{
      
      UserId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: { model: 'Users', keys: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      CourseId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: { model: 'Courses', keys: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('FavoriteCourses');
  }
};
