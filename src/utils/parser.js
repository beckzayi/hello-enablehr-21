import SwaggerParser from 'swagger-parser';
const OpenAPISampler = require('openapi-sampler');

const parser = new SwaggerParser();

async function loadSpec(spec_url) {
    const api = await parser.parse(spec_url);
    return api;
}

/**
 *
 * @param {string} $ref - the referenced component
 * @param {string} spec_url - the string url of the api file
 * @returns
 */
async function getRefComponent($ref, spec_url) {
    const $refs = await parser.resolve(spec_url);
    const component = $refs.get($ref);
    return component;
}

async function loadPaths(spec_url) {
    const api = await loadSpec(spec_url);
    const paths = Object.keys(api.paths).map((path) => path);
    return paths;
}

/**
 * Get sample example value
 * @param {object} schema
 * @param {string} api - the string url of the api file
 * @returns {object}
 */
function getExampleValue(schema, api) {
    return OpenAPISampler.sample(schema, null, api);
}

/**
 * Retrieve the schema object by a single response object of a status code, such as 200, or a requestBody object
 * @param {object} obj - this can the response or requestBody object
 * @param {string} api - the string url of the api file
 * @returns {object}
 */
async function loadSchema(obj, api) {
    if (!obj.content && !obj.$ref && !obj.properties) {
        return;
    }
    if (obj.$ref) {
        const component = await getRefComponent(obj.$ref, api);
        return await loadSchema(component, api);
    }

    return obj?.content['application/json']?.schema;
}

async function listAllPropertiesOfSchema(properties, api) {
    const result = [];
    const keys = Object.keys(properties);
    for (const prop of keys) {
        if (properties[prop].$ref) {
            const schema = await getRefComponent(properties[prop].$ref, api);
            let o = { name: prop, type: schema.type };
            let tempProperties;
            if (schema.properties) {
                tempProperties = await listAllPropertiesOfSchema(schema.properties, api);
                o = { ...o, properties: tempProperties };
            } else if (schema.type === 'array') {
                if (schema?.items?.$ref) {
                    const itemSchema = await getRefComponent(schema.items.$ref, api);
                    tempProperties = await listAllPropertiesOfSchema(itemSchema.properties, api);
                } else if (schema.properties) {
                    tempProperties = await listAllPropertiesOfSchema(schema.properties, api);
                }
                o = { ...o, properties: tempProperties };
            }
            result.push(o);
        } else {
            result.push({
                name: prop,
                type: properties[prop].type,
            });
        }
    }

    return result;
}

export { loadSpec, getRefComponent, loadPaths, getExampleValue, loadSchema, listAllPropertiesOfSchema };
