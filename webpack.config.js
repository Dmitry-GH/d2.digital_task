var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: [
        SRC_DIR + "/app/index.js",
        SRC_DIR + "/sass/style.scss",
    ],
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader?sourceMap' })
                
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: SRC_DIR + "/index.html",
            to: DIST_DIR+"/index.html"
        }], { debug: 'info'}),

        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
};
