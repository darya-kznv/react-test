const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
require('babel-polyfill');

module.exports = ( env, argv ) => {
    var isDevelopmentMode = ( argv.mode === "development" );

    return({
        entry: {
            index: ['babel-polyfill', './src/index.js']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.[hash].js',
        },
        devServer: {
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        isDevelopmentMode ? 'style-loader' : {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '/dist',
                            }
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    config: path.resolve(__dirname, 'postcss.config.js'),
                                },
                            },
                        },

                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: 'index.css',
            }),

        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    test: /\.js(\?.*)?$/i,
                }),
            ]
        },
    })
};
