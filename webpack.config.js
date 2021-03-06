var fs = require("fs");
const path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const prod = process.argv.indexOf('-p') !== -1;


module.exports = {
  
    module: {
        rules: [
            { test: /\.tsx?$/, use:[ "awesome-typescript-loader" ]},
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]//,
                //include: sourcePath
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ,
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            },
             {
                test: /\.scss$/,
                exclude: '/node_modules/',
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    }
                )
            }

        ],
        
    },
    plugins: [

        // Output stats.json
        function () {
            // When webpack has finished
            this.plugin("done", function (stats) {
                // try and find a "Webpack" folder
                var wpPath = path.join(__dirname, "Webpack");
                if (fs.existsSync(wpPath) === false) {
                    // If it doesn't exist, create it
                    fs.mkdirSync(wpPath);
                }
                // write the stats.json file to the Webpack folder
                fs.writeFileSync(
                    path.join(wpPath, "stats.json"),
                    JSON.stringify(stats.toJson()));
            });
        },
        // Use a plugin which will move all common code into a "vendor" file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', filename: "vendor.js", Infinity
        })
        , new ExtractTextPlugin({
            filename: "styles.css",
            
            allChunks: true
        })
    ],

  
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    // Make sure Webpack picks up the .ts files
    resolve: {
        extensions: [".ts", ".tsx", '.js', 'jsx', '.vue', 'css', 'scss', '.json'],
        alias: {
            //'vue$': 'vue/dist/vue.esm.js'
        }
    },

    entry: {
        // Output a "home.js" file from the "home-page.ts" file
        styles: './styles.js',
        vendor: './Scripts/main.vendor.ts',
        home: './Scripts/home/home-page.tsx' //,
        //// Output a "contact.js" file from the "contact-page.ts" file
        //contact: './Scripts/contact/contact-page.jsx'
    },
    output: {
        // The format for the outputted files
        filename: (prod) ? "[name].[chunkhash].js" : "[name].js",
        // Put the files in "wwwroot/js/"
        path: path.resolve(__dirname, 'wwwroot/')
    },

    // externals: {
    //    "react": "React",
    //    "react-dom": "ReactDOM"
    //}
};