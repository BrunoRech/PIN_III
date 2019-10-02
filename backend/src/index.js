const express = require('express'); 
const cors = require('cors');
const requireDir = require('require-dir');
const app = express();
//yarn dev

//npx sequelize db:migrate

app.use(express.json());
app.use(cors());
app.use('/api', require('./routes'));
app.use(express.urlencoded({ extended: false }));

requireDir('./app/models');

app.listen(3000);

app.get('/', function(res){
    res.sendFile('index.html', { root: __dirname + '/../'});
})