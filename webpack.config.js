const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        'index': [
            './docs/index'
        ]
    },
    output: {
        path: path.join(__dirname, 'docs/build'),
        filename: '[name].bundle.js',
        publicPath: '/markdown-it-react-loader/docs/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /dict-zi\.js/
            }, {
                test: /\.md$/,
                use: [
                    'babel-loader',
                    {
                        loader: './index.js',
                        options: {
                          className: 'doc',
                        }
                    }
                ],
            }, {
                test: /\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'less-loader', options: { javascriptEnabled: true } }
                ]
            }
        ],
    }
};
