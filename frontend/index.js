const express = require('express');
const app = express();
const http = require('http');

// yarn dev 

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

config.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname));

app.all('/api/*', function (req, res) {
    var creq = http.request({
        host: req.headers.location,
        port: 3000,
        path: req.url,
        method: req.method,
        headers: req.headers
    }, function (cres) {
        cres.setEncoding('utf8');
        let sData = '';
        cres.on('data', function (chunk) {
            sData += chunk;
        });
        cres.on('close', function () {
            res.writeHead(cres.statusCode);
            res.write(sData);
            res.end();
        });
        cres.on('end', function () {
            res.writeHead(cres.statusCode);
            res.write(sData);
            res.end();
        });
    }).on('error', function (e) {
        console.log(e.message);
        res.writeHead(500);
        res.end();
    });

    creq.end();
});

app.listen(80);