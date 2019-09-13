module.exports = (sequelize, DataTypes) =>{ 

    const Course = sequelize.define('Course', {
        category: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING},
        image: {type: DataTypes.STRING},
        link: {type: DataTypes.STRING},
        name: {type: DataTypes.STRING},
        occupation: {type: DataTypes.STRING},
        price: {type: DataTypes.DOUBLE},
        rating: {type: DataTypes.DOUBLE},
    });

    return Course;
}