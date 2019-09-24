const { Users } = require('./Users');
const { Courses } = require('./Courses');

module.exports = (sequelize, DataTypes) => {
    const FavoriteCourses = sequelize.define('FavoriteCourses', {
        UserId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            references: {
                model: Users,
                key: 'id'
            },
        },
        CourseId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            references: {
                model: Courses,
                key: 'id'
            }
        }
    },{timestamps: false});

    return FavoriteCourses;
}