module.exports = (sequelize, DataTypes) => {
    const UserSearch = sequelize.define('UserSearch', {
        searchDate: {
            type: DataTypes.DATE
        },

        searchQuery: {
            type: DataTypes.STRING
        }
    });

    return UserSearch;
}