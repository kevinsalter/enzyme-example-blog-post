module.exports = {
    entry: './src/app.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
}
