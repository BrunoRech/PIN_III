const {User} = require('./User');
const { Course} = require('./Course');

module.exports = (sequelize, DataTypes) => {
    const FavoriteCourse = sequelize.define('FavoriteCourse', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
        courseId: {
            type: DataTypes.INTEGER,
            references: {
                model: Course,
                key: 'id',
            }
        }
    });

    return FavoriteCourse;
}