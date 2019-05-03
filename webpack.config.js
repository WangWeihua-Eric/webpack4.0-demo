const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: "url-loader",
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 2048 //2kb以上不打包为base64
                }
            }
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2,
                        modules: true    //css模块开启
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
}