const {Users} = require('./Users');

module.exports = (sequelize, DataTypes) => {
    const UserSearches = sequelize.define('UserSearches', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: Users,
                key: 'id',
            },
        },
        searchDate: {
            type: DataTypes.DATE
        },

        searchQuery: {
            type: DataTypes.STRING
        }
    },{timestamps: false});

    return UserSearches;
}