const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/dist'),
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};