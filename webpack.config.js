// instanciar los recursos para poderlos usar.
const path = require('path');
const HtmlWebPackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // punto de entrada
    //punto de salida
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    // identificar las extensiones que estemos trabajando
    resolve: {
        extensions: ['.js']
    },
    // modulo de reglas para aplicar
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: './public/index.html', //lugar del archivo principal html
            filename: './index.html',
        })
    ]
}