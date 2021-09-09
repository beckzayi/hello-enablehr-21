/**
 * Organize the list of pages from json data
 * @param {Object} pathObj
 * @param {String} url
 */
const listPages = (pathObj, url) => {
    // Group get and post objects into the same request url, and push it to an array.
    const arrayOfPages = [];

    const actions = ['get', 'post', 'put', 'delete'];

    Object.keys(pathObj).forEach((key) => {
        if (actions.includes(key)) {
            const page = { ...pathObj[key] };
            page.method = key;
            page.slug = `${page.operationId}/${key}`;
            page.url = url;
            arrayOfPages.push(page);
        }
    });

    return arrayOfPages;
};

const listPageParameters = (pathObj) => {
    // Get request parameters common for all request actions.
    let arrayOfPages = [];
    Object.keys(pathObj).forEach((key) => {
        if (key === 'parameters') {
            arrayOfPages = pathObj[key];
        }
    });
    return arrayOfPages;
};

module.exports = { listPages, listPageParameters };
