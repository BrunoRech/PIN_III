const { Courses } = require('../../app/models');

module.exports = {

    async getCourses(req, res) {
        try {
            const courses = await Courses.findAll();
            return res.json(courses);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async getCourseById(req, res) {
        try {
            const courses = await Courses.findAll({
                where: { id: req.params.id }
            });
            return res.json(courses);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async postCourse(req, res) {
        try {
            const user = await Courses.create(req.body);
            return res.send(user);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async editCourse(req, res) {
        try {
            const course = req.body;

            await Courses.update(
                {
                    ...course
                },
                {
                    where: { id: req.params.id }
                }
            )

            return res.json(course);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    async deleteCourse(req, res) {
        try {
            await Courses.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.send();
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}