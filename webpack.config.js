const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode:"development",
    entry:path.resolve(__dirname, 'public/index.tsx'),
    output:{
        path:path.resolve(__dirname, "build"),
        filename:'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),       
        inline: true,
        hot:true,                
        port: 8090
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,  
              loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },            
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass!style'),
                include: './public/scss'
            }
        ]
      },
     plugins:[
        new ExtractTextPlugin({
            filename: 'build/style.css',
            allChunks: true,
        })
     ], 
    devtool: "source-map"
}