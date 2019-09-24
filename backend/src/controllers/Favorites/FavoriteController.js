const {FavoriteCourses} = require('../../app/models');

module.exports = {
    
    async getFavorites(req,res){
        const favorites = await FavoriteCourses.findAll();
        return res.json(favorites);
    },
    
    async getFavoriteByUserId(req,res){
        const favorites = await FavoriteCourses.findAll({
            where: {UserId: req.params.id}
        });
        return res.json(favorites);
    },

    async getFavoriteByCourseId(req,res){
        const favorites = await FavoriteCourses.findAll({
            where: {CourseId: req.params.id}
        });
        return res.json(favorites);
    },

    async postFavorite(req,res){
        const favorites = await FavoriteCourses.create(req.body);
        return res.json(favorites);
    },

    async deleteFavorite(req,res){
        console.log('TODO');
        /*
        TODO
        await FavoriteCourses.destroy({
            where: {id:req.params.id}
        });
        */
        return res.send('TODO');
    }
}