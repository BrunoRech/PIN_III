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

app.use(express.static(__dirname + '/../../frontend'));

app.all('/main.js', function(req, res){
    res.sendFile('dist/main.js', {root: __dirname + '/../'});
});

app.all('/main.js.map', function(req, res){
    res.sendFile('dist/main.js.map', {root: __dirname + '/../'});
});

app.listen(3000);