module.exports = (sequelize, DataTypes) =>{ 

    const Courses = sequelize.define('Courses', {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        category: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING},
        image: {type: DataTypes.STRING},
        link: {type: DataTypes.STRING},
        name: {type: DataTypes.STRING},
        occupation: {type: DataTypes.STRING},
        price: {type: DataTypes.DOUBLE},
        rating: {type: DataTypes.DOUBLE},
    },{timestamps: false});

    Courses.hasMany(sequelize.import('./FavoriteCourses.js'));
    return Courses;
}