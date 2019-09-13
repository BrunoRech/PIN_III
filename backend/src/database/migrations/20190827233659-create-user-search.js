module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('UserSearch',{

      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      searchDate:{
        type: DataTypes.DATE,
        allowNull: false,
      },

      searchQuery: {
        type: DataTypes.STRING,
        allowNull: false,
      }

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('UserSearch');
  }
};
