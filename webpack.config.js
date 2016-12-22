"use strict";

var webpack = require('webpack'),
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