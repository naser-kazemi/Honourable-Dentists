module.exports = {
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            const svgLoaderRule = webpackConfig.module.rules.find(
                rule => rule.test && rule.test.toString().includes('svg')
            );

            svgLoaderRule.exclude = /\.svg$/;

            webpackConfig.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            });

            return webpackConfig;
        },
    },
};