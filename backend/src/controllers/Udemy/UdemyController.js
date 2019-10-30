
const request = require('request');

const user_id = 'VT7KEMNDeGeKszExmxsVUarAK9jS7zKz2D3gZQ0r';
const client_secret = 'nidauKZKZQ7IZQCkXZDi3Vho87Tu4lzOxHZLbunpU08xBIud7ZPQx0NEnzI81LHRbJMen6JG371GzTcNxbPTjV9zRWLVLES0rSHV3Rw7wWtxJ6TbzMvOQU0GMRhHdLlb'

const url = 'https://www.udemy.com/api-2.0/courses';

const options = {
    url,
    auth: {
        user: user_id,
        password: client_secret
    }
}

module.exports = {
    async teste(req, res) {
        let bodyResponse;
        request(options, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            bodyResponse = body;
        });
        return res.status(200).json(bodyResponse);
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