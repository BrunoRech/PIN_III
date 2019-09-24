module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('FavoriteCourse',{
      
      UserId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: { model: 'User', keys: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      CourseId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: { model: 'Course', keys: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('FavoriteCourse');
  }
};
