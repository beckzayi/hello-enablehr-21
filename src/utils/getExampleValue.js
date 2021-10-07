import data from '../content/enablehr.json';

/**
 * Return the example value by response or requestBody object
 * @param {Object} response
 * @return {string|Object\Array}
 */
export default (response) => {
    if (response.$ref !== undefined) {
        response = getRequestBody(response.$ref);
    }
    const objectSchema = getParentSchema(response);
    const exampleValue = getExampleResponseValue(objectSchema);
    return exampleValue;
};

function getSchemaProperties(response) {
    if (response.$ref === undefined) {
        return;
    }
    let schema = getRequestBody(response.$ref);
    let parentSchema = getParentSchema(schema);
    return getProperties(parentSchema);
}

function getProperties(schema) {
    if (schema === undefined) {
        return;
    }

    // 1. If "example" exists
    let $ref; // It is a string, pointing to a reference schema

    if (Object.prototype.hasOwnProperty.call(schema, '$ref')) {
        $ref = schema.$ref;
        schema = getSchemaObjectByRef($ref);
        if (Object.prototype.hasOwnProperty.call(schema, '$ref')) {
            return getProperties(schema);
        }
    }

    // 2. If "properties" exist
    if (Object.prototype.hasOwnProperty.call(schema, 'properties')) {
        const { properties, type, required } = schema;
        const keys = Object.keys(properties);
        keys.forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(properties[key], '$ref')) {
                $ref = properties[key].$ref;
                schema = getSchemaObjectByRef($ref);
                const newProps = getProperties(schema);
                properties[key] = newProps;
            }
        });

        return {
            properties,
            type,
            required,
        };
    }

    return schema;
}

/**
 * Return the top parent schema
 * @param {Object} response
 * @return {Object}
 */
function getParentSchema(response) {
    if (response.content === undefined) {
        return;
    }
    const { schema } = response.content['application/json'];
    return schema;
}

/**
 * Return the example response value via the schema object. The function involves recursive calls.
 * @param {Object} schema
 * @return {string|Object|Array}
 */
function getExampleResponseValue(schema) {
    if (schema === undefined) {
        return;
    }

    let result = {};

    // 1. If "example" exists
    if (schema.example !== undefined) {
        return schema.example;
    }

    let $ref, // It is a string, pointing to a reference schema
        nextSchema; // The parent schema may contain the "$ref" property, referring to a schema

    $ref = schema?.items?.$ref || schema?.$ref;
    if ($ref) {
        nextSchema = getSchemaObjectByRef($ref);
        return getExampleResponseValue(nextSchema);
    }

    // 2. If "properties" exist
    if (schema?.properties) {
        const { properties } = schema;
        const keys = Object.keys(properties);

        return keys.reduce((accumulator, currentKey) => {
            let temp = {};
            // 2a. If "example" exists
            if (properties[currentKey]?.example) {
                temp[currentKey] = properties[currentKey].example;
            }

            // 2b. If "$ref" exists
            if (properties[currentKey]?.$ref) {
                $ref = properties[currentKey].$ref;
                nextSchema = getSchemaObjectByRef($ref);
                temp[currentKey] = getExampleResponseValue(nextSchema);
            }

            if (properties[currentKey]?.type === 'object') {
                nextSchema = properties[currentKey];
                temp[currentKey] = getExampleResponseValue(nextSchema);
            }

            if (properties[currentKey]?.type === 'array' && properties[currentKey]?.items?.$ref) {
                $ref = properties[currentKey].items.$ref;
                nextSchema = getSchemaObjectByRef($ref);
                temp[currentKey] = [getExampleResponseValue(nextSchema)];
            }

            return Object.assign(result, accumulator, temp);
        }, []);
    }

    // 3. If "allOf" exists
    if (schema?.allOf) {
        return schema.allOf.reduce((accumulator, currentItem) => {
            $ref = currentItem.$ref;
            nextSchema = getSchemaObjectByRef($ref);
            const temp = getExampleResponseValue(nextSchema);
            return { ...accumulator, ...temp };
        }, []);
    }

    return result;
}

/**
 * Return the schema object by $ref
 * @param {string} $ref
 * @return {Object}
 */
function getSchemaObjectByRef($ref) {
    const arr = $ref.split('/');
    const componentName = arr[arr.length - 1];

    const { components } = data;
    return components.schemas[componentName];
}

/**
 * Return the request body object by $ref
 * @param {string} $ref
 * @return {Object}
 */
function getRequestBody($ref) {
    const arr = $ref.split('/');
    const componentName = arr[arr.length - 1];

    const { components } = data;
    return components['requestBodies'][componentName];
}

export { getSchemaProperties };
