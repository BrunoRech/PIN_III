const { Courses } = require('../../app/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async findCourse(req, res) {
        try {
            const { name, price, category, rating } = req.query;
            const courses = await Courses.findAll({
                where: {
                    [Op.and]: [
                        name ? { name } : null,
                        price ? {
                            price: {
                                [Op.lte]: price,
                            }
                        } : null,
                        category ? { category } : null,
                        rating ? {
                            rating: {
                                [Op.gte]: rating,
                            }
                        } : null,
                    ],
                }
            });
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }


    }
}