const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.js$/,
            // use: {
            //     loader: 'babel-loader'
            // }
            use: ['babel-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.min.js'
        filename: '[name].bundle.min.js'
    }
}