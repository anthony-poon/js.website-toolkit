const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    target: 'web',
    mode: 'development',
    entry: './examples/src/main.js',
    devtool: 'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './examples/dist')
    },
    resolve: {
        alias: {
            'website-toolkit': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new ManifestPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './examples'),
        compress: true,
        port: 3000
    }
};
