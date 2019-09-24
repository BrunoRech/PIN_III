module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('UserSearches',{
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'Users', keys: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      searchDate:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      searchQuery: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('UserSearches');
  }
};
