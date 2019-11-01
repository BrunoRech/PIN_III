
const request = require('request');

const user_id = 'VT7KEMNDeGeKszExmxsVUarAK9jS7zKz2D3gZQ0r';
const client_secret = 'nidauKZKZQ7IZQCkXZDi3Vho87Tu4lzOxHZLbunpU08xBIud7ZPQx0NEnzI81LHRbJMen6JG371GzTcNxbPTjV9zRWLVLES0rSHV3Rw7wWtxJ6TbzMvOQU0GMRhHdLlb'
const baseUdemyUrl = 'https://www.udemy.com';
const coursesUrl = 'https://www.udemy.com/api-2.0/courses/';

const getRating = async id =>{
    const options = {
        url: coursesUrl+id+'/reviews/',
        auth: {
            user: user_id,
            password: client_secret
        }
    }
    await request(options, (err, res, body) => {
        const {results} = JSON.parse(body);
        let summ = 0;

        results.map(r =>{
            summ += parseInt(r.rating);
        });

        return summ/results.length;

    });
}

module.exports = {
    async teste(req, resposta) {
        const options = {
            url: coursesUrl,
            auth: {
                user: user_id,
                password: client_secret
            }
        }

        await request(options, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            const {results} = JSON.parse(body);
            const arr = [];
            results.map(async r => {
                const {title, url, image_480x270, description, primary_category, id } = r
                const {amount} = r.price_detail;
                const rating = await getRating(id);
                
                return arr.push({title, url:baseUdemyUrl+url, amount, image_480x270, description, primary_category, rating});
            });
             return resposta.json(arr);
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