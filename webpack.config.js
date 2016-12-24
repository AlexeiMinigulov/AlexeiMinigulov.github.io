"use strict";

var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path'),
    sourcePath = path.join(__dirname, '/src'),
    nodeModules = path.join(__dirname, '/node_modules'),
    outputPath = path.join(__dirname, '/dist');

var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: sourcePath,

    entry: {
        app: ['./app.js']
    },
    output: {
        path: outputPath + '/js',
        publicPath: '/',
        filename: '[name].js'
    },


    watch: (NODE_ENV == 'development'),
    watchOptions: {
        aggregateTimeout: 200
    },


    devtool: (NODE_ENV == 'development') ? "source-map" : null,


    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            /*$: "jquery/dist/jquery.min.js",
            angular: "angular/angular.min.js",
            materialize: "materialize-css/dist/js/materialize.min.js"*/
        }),
        new ExtractTextPlugin("../css/style.css")
    ],


    module: {
        loaders: [
            {
                test: /\.js$/,      // Преобразовать в старый js
                exclude: [      // Исключить
                    /node_modules/
                ],
                loader: 'babel'
            },
            {
                test: /\.html$/,    // встраиваем html в js script
                exclude: [
                    /node_modules/,
                    /bower_components/
                ],
                loader: 'ng-cache?prefix=[dir]/[dir]'
            },
            {
                test: /\.css$/,
                exclude: [ path.resolve(__dirname, 'src/common.css') ],
                loader: 'style!css!autoprefixer?browsers=last 2 versions'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src/common.css"),
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,   // При загрузки background стилей
                include: [ path.resolve(__dirname, "node_modules/font-awesome") ],
                loader: 'url?name=[path].[ext]&limit=80000'
            },
            {
                test: /\.(svg|ttf|eot|otf|woff|woff2)$/,
                exclude: [ path.resolve(__dirname, "node_modules/font-awesome") ],
                loader: 'url'
            }
        ],



        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            hot: true
        },
        externals: {
            angular: 'angular'
        },

        noParse: [
            /angular\/angular.js/
        ]
    }


};

/*module.exports = {
    context: nodeModules,

    entry: {
            'angular.min': 'angular/angular.min.js',
            'angular-ui-router.min': 'angular-ui-router/release/angular-ui-router.min.js',
            'jquery.min': 'jquery/dist/jquery.min.js',
            'materialize.min': 'materialize-css/dist/js/materialize.min.js'
    },

    output: {
        path: outputPath + '/js/library',
        filename: '[name].js'
    },
};*/