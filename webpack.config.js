var path = require('path')
var nodeExternals = require('webpack-node-externals')
var TerserPlugin = require('terser-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    mode: process.env.NODE_ENV || 'development',
    devtool: 'inline-source-map',
    entry: './main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.graphql', '.jsx', '.js'],
        alias: {
            '~': path.resolve(__dirname, '')
        },
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                options: {
                    presets: ['@babel/preset-env'],
                    // targets: {
                    //     node: true,
                    // },
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: process.env.NODE_ENV==='production' ? false : true,
                        source_map: true,
                    }
                }
            }),
        ],
    },
    plugins: [

        new FileManagerPlugin({
            
            events: {
                onStart: {
                    delete: [
                        path.join(__dirname, 'dist/public'),
                        path.join(__dirname, 'dist/resources/views'),
                        path.join(__dirname, 'dist/storage'),
                    ]
                },
                onEnd: {
                    copy: [
                        {
                            source: path.join(__dirname, 'public'),
                            destination: path.join(__dirname, 'dist/public')
                        },
                        {
                            source: path.join(__dirname, 'resources/views'),
                            destination: path.join(__dirname, 'dist/resources/views')
                        },
                        {
                            source: path.join(__dirname, 'storage'),
                            destination: path.join(__dirname, 'dist/storage')
                        },
                    ]
                }
            }
            
        })

    ]
}
