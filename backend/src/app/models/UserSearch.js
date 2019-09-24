const {User} = require('./User');

module.exports = (sequelize, DataTypes) => {
    const UserSearch = sequelize.define('UserSearch', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
        searchDate: {
            type: DataTypes.DATE
        },

        searchQuery: {
            type: DataTypes.STRING
        }
    });

    return UserSearch;
}