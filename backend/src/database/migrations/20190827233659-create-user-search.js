module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('UserSearch',{
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
        references: { model: 'User', keys: 'id' },
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
    return queryInterface.dropTable('UserSearch');
  }
};
