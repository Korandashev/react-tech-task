const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    output: {
        filename: 'js/[name].[hash].js',
        path: path.join(__dirname, '/dist'),
        chunkFilename: 'js/[name].[chunkhash].js',
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                cache: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin(),
        ],
        splitChunks: {
            automaticNameDelimiter: '.',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial',
                },
                async: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'async',
                    chunks: 'async',
                    minChunks: 4,
                },
            },
        },
        runtimeChunk: true,
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
        }),
    ],
    devtool: false,
};