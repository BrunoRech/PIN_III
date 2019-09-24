module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Courses',{

      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      occupation: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },

      rating: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Courses');
  }
};
