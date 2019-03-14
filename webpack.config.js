const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');



module.exports = {
    entry: "./src/index.jsx",

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "css-hot-loader",
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: [path.join(process.cwd(), "src/styles/vars.scss"), path.join(process.cwd(), "src/styles/responsive.scss")]
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ]
};