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

app.use(express.static(__dirname + '/src'));

app.use('/api', function (req, res) {
    var url = 'http://' + req.headers.host + ':3000/api' + req.url;
    if(req.file && req.file.filename){
        req.body.image = req.file.filename;
    }
    var requestPipe = null;
    switch(req.method){
        case 'POST':
            requestPipe = request.post({uri: url, json: req.body});
            break;
        case 'PUT':
            requestPipe = request.put({uri: url, json: req.body});
        break;
        default:
            requestPipe = request(url);
            break;
    }

    requestPipe.pipe(res);
});

express.static.mime.default_type = "image/jpeg";
app.use('/upload', express.static(__dirname + '/../upload'));

app.listen(80);