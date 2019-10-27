const express = require('express');
const app = express();
const request = require('request');
const multer = require('multer')({ dest: '../upload/'});

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

config.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(express.json());
app.use(express.urlencoded());
app.use(multer.single('image'))

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname));

app.use('/api', function (req, res) {
    var url = 'http://' + req.headers.host + ':3000/api' + req.url;
    if(req.file.filename){
        req.body.image = req.file.filename;
    }
    console.log(req.body);
    var requestPipe = null;
    switch(req.method){
        case 'POST':
            requestPipe = request.post({uri: url, json: req.body});
            break;
        case 'PUT':
            requestPipe = request.put({uri: url, json: req.body});
            console.log('PUT');
        break;
        default:
            requestPipe = request(url);
            break;
    }

    requestPipe.pipe(res);
});

app.listen(80);