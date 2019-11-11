
const request = require('request');
const { Courses } = require('../../app/models');

const user_id = 'VT7KEMNDeGeKszExmxsVUarAK9jS7zKz2D3gZQ0r';
const client_secret = 'nidauKZKZQ7IZQCkXZDi3Vho87Tu4lzOxHZLbunpU08xBIud7ZPQx0NEnzI81LHRbJMen6JG371GzTcNxbPTjV9zRWLVLES0rSHV3Rw7wWtxJ6TbzMvOQU0GMRhHdLlb'
const baseUdemyUrl = 'https://www.udemy.com';
const coursesUrl = 'https://www.udemy.com/api-2.0/courses/';

module.exports = {
    async teste(req, resposta) {
        const options = {
            url: coursesUrl,
            auth: {
                user: user_id,
                password: client_secret
            }
        }

        request(options, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            const { results } = JSON.parse(body);
            const arr = [];
            results.map(async r => {
                const { title, url, image_480x270, primary_category, id } = r
                const { amount } = r.price_detail;

                return await Courses.create({
                    category: "Courses",
                    description: "Um curso da plataforma da Udemy",
                    image: image_480x270,
                    link: baseUdemyUrl + url,
                    name: title,
                    price: amount,
                    rating: Math.floor(Math.random()*3)+2,
                })
            });
            return resposta.json({message: 'success'});
        });
    },

    async getUserById(req, res) {

    },

    async postUser(req, res) {

    },

    async editUser(req, res) {

    },

    async deleteUser(req, res) {

    }

}