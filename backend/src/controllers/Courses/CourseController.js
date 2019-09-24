const { Courses } = require('../../app/models');

module.exports = {

    async getCourses(req,res){
        const courses = await Courses.findAll();
        return res.json(courses);
    },
    
    async getCourseById(req,res){
        const courses = await Courses.findAll({
            where: {id: req.params.id}
        });
        return res.json(courses);
    },

    async postCourse(req,res){
        const user = await Courses.create(req.body);
        return res.send(user);
    },

    async editCourse(req,res){
        const course = req.body;
        
        await Courses.update(
            {
                ...course
            },
            {
                where: {id: req.params.id}
            }
        )

        return res.json(course);
    },

    async deleteCourse(req,res){
        await Courses.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send();
    }
}