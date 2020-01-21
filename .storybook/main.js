/**
 * View more at https://storybook.js.org/docs/configurations/custom-webpack-config/
 */

const path = require('path');

module.exports = {
    stories: ['../stories/**/*.stories.js'],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push(
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../'),
                exclude: /node_modules/
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }
        );

        return config;
    }
};
