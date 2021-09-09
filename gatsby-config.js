module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'mds',
                path: `${__dirname}/src/mds/`,
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    extensions: ['.mdx', '.md'],
                },
            },
        },
    ],
    siteMetadata: {
        title: 'enableHR API',
        description: 'Hosted API documentation for enableHR endpoints',
        url: 'https://www.enablehr.com.au',
        image: '/images/logo.svg',
    },
};
