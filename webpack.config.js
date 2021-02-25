const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                },
            {
            test: /\.scss$/,
            use: [
                 MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
            exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/style.css' })
    ],
    mode: 'development'
};