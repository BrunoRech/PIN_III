const { Courses } = require('../../app/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async findCourse(req, res) {
        try {
            const { name, price, category, rating } = req.query;
            const courses = await Courses.findAll({
                where: {
                    [Op.or]: [
                        { name },
                        { price },
                        { category },
                        { rating: {
                                [Op.gte]: rating,
                            }
                        }   
                    ],
                }
            });
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }


    }
}