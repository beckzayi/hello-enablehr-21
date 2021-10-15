import data from '../content/enablehr_v2.json';

export const objectToArray = (obj) => {
    const keys = Object.keys(obj);
    return keys.map((key) => obj[key]);
};

/**
 * Get the object by component name
 * @param {String} componentName
 */
export const getComponentObject = (componentName) => {
    const { components } = data;
    return components.schemas[componentName];
};

export const PATH_PREFIX_DOCS = 'docs';
