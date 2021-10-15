const SwaggerParser = require('swagger-parser');

const api_spec = './src/content/enablehr.json';

const http_verbs = ['get', 'post', 'put', 'patch', 'delete'];

exports.createPages = async ({ actions: { createPage } }) => {
    // Parse the openapi json file
    const parser = new SwaggerParser(),
        api = await parser.parse(require.resolve(api_spec));

    // the `paths` object in the api spec
    const { paths } = api;

    // Retrieve all paths in an array
    const arrayPaths = Object.keys(paths);

    // Retrieve the individual path object
    arrayPaths.forEach((endpoint) => {
        // endpoint i.e. `/accounts/{accountId}/employees`
        // pathObj -> path: { get, post, parameters }
        const pathObj = paths[endpoint];
        const parameters = pathObj.parameters;

        // Iterate the path object
        Object.keys(pathObj).forEach((operation) => {
            // operation i.e `get`, `post`, `put` etc
            if (!http_verbs.includes(operation)) {
                return;
            }

            // operationObj -> i.e. get: { description, operationId, parameters, responses, security, summary, tags }
            const operationObj = pathObj[operation];

            const slug = `${operationObj.operationId}/${operation}`;

            createPage({
                path: `/development/${slug}`,
                component: require.resolve(`./src/templates/page-template.js`),
                context: {
                    page: operationObj,
                    parameters: parameters,
                    method: operation,
                    endpoint: endpoint,
                    identifier: operationObj.operationId,
                    slug: slug,
                },
            });
        });
    });
};

// Migrating gatsbyjs from v2 to v3
// To solve the common error `process is not defined` in some dependencies
// Webpack 4 polyfilled process automatically in the browser, but with v5 it’s not the case anymore.
exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
    if (stage === 'build-javascript' || stage === 'develop') {
        actions.setWebpackConfig({
            plugins: [plugins.provide({ process: 'process/browser', Buffer: ['buffer', 'Buffer'] })],
        });
    }
    actions.setWebpackConfig({
        resolve: {
            fallback: {
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
            },
        },
    });
};
