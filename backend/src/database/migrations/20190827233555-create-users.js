module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      birthDate: {
        allowNull: false,   
        type: DataTypes.DATEONLY,
      },
      type: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('User');
  }
};