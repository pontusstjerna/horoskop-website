// Since this is the top config file it can't use all ES6 features :(

const path = require('path');

module.exports = {
    entry: './resources/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    devServer: {
        contentBase: './public',
        publicPath: '/dist/'
    },
    module: {
        rules: [{
                test: /\.m?js$/, // this is the regex
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.s(a|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
        }]
    }
};
