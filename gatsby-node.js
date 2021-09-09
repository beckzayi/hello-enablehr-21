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
            item.parameters = arrayOfPageParams;
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
