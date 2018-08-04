const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
    return { 
        ...defaultConfig,
        plugins: [
            ...defaultConfig.plugins,

            // override manager layout
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['manager'],
                chunksSortMode: 'none',
                template: require.resolve('./manager-layout.html.ejs'),
            }),

            // override preview layout
            new HtmlWebpackPlugin({
                filename: 'iframe.html',
                excludeChunks: ['manager'],
                chunksSortMode: 'none',
                template: require.resolve('./preview-layout.html.ejs'),
            }),
        ],
    };
};