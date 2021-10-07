const { listPages, listPageParameters } = require('./src/utils/listPages');

exports.createPages = ({ actions: { createPage } }) => {
    const pageData = require('./src/content/enablehr.json');

    const { paths } = pageData;

    const results = [];

    // convert JSON string to array
    Object.keys(paths).forEach((key) => {
        // `key` here is the api request url
        const apiUrl = key;
        const arrayOfPages = listPages(paths[apiUrl], apiUrl);
        const arrayOfPageParams = listPageParameters(paths[apiUrl]);
        arrayOfPages.forEach((item) => {
            item.path_parameters = arrayOfPageParams;
            results.push(item);
        });
    });

    results.forEach((page) => {
        createPage({
            path: `/development/${page.slug}`,
            component: require.resolve(`./src/templates/page-template.js`),
            context: { page, identifier: page.operationId },
        });
    });
};

// Migrating gatsbyjs from v2 to v3
// To solve the common error `process is not defined` in some dependencies
// Webpack 4 polyfilled process automatically in the browser, but with v5 it’s not the case anymore.
exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
    if (stage === 'build-javascript' || stage === 'develop') {
        actions.setWebpackConfig({
            plugins: [plugins.provide({ process: 'process/browser' })],
        });
    }
};
