var path = require('path');
module.exports = {
    entry: path.join(process.cwd(), 'client-side-rendering.js'),
    output: {
        path: './public/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};