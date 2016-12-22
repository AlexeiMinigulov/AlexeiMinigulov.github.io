"use strict";

var webpack = require('webpack'),
    path = require('path'),
    sourcePath = path.join(__dirname, '/src'),
    outputPath = path.join(__dirname, '/dist');

var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: sourcePath,

    entry: {
        app: ['./app.js']
    },

    output: {
        path: outputPath + '/js',
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
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,      // Преобразовать в старый js
                exclude: [      // Исключить
                    /node_modules/,
                    /bower_components/
                ],
                loader: 'babel'
                //loader: 'babel?optional[]=runtime'
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
                test: /\.css$/,         // Встраиваем стили в html
                exclude: [      // Исключить
                    /node_modules/,
                    /bower_components/
                ],
                include: path.resolve(__dirname, "src"),
                loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,    // При загрузки background стилей
                exclude: [      // Исключить
                    /node_modules/,
                    /bower_components/
                ],
                include: path.resolve(__dirname, "src"),
                loader: 'file?name=[path][name].[ext]'
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