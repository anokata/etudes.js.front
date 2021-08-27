var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
 
module.exports = {
 entry: './src/main.js',
 output: {
   path: path.resolve(__dirname, './dist'),
   publicPath: '/dist/',
   filename: 'build.js'
 },
 module: {
   rules: [
     {
       test: /\.vue$/,
       loader: 'vue-loader'
     }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }
   ]
 },
 plugins: [
    new VueLoaderPlugin()
   ]
}
