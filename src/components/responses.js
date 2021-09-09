import React from 'react';
import PrettyPrint from '../components/prettyprint.js';

function displayReference(responseContext, components) {
    if (responseContext.content && responseContext.content['application/json'].schema['$ref']) {
        const reference = responseContext.content['application/json'].schema['$ref'];

        // take the string apart

        const words = reference.split('/');
        const lastword = words[words.length - 1];
        return (
            <div>
                <PrettyPrint jsonObj={components.schemas[lastword]} />
            </div>
        );
    }
    // expected output: "fox"
}

function displayDescription(responseContext) {
    if (responseContext.content && responseContext.content['application/json'].schema.description) {
        return (
            <div>
                Description: {responseContext.content && responseContext.content['application/json'].schema.description}{' '}
            </div>
        );
    }
}

function displayExample(responseContext) {
    if (responseContext.content && responseContext.content['application/json'].schema.example) {
        return (
            <div>Example: {responseContext.content && responseContext.content['application/json'].schema.example} </div>
        );
    }
}

function displayType(responseContext) {
    if (responseContext.content && responseContext.content['application/json'].schema.type) {
        return <div>Type: {responseContext.content && responseContext.content['application/json'].schema.type} </div>;
    }
}

const Response = (props) => {
    const responseContext = props.responseContext;
    const responseCode = props.responseCode;
    const components = props.components;

    return (
        <div>
            <h5>HTTP Return Code: {responseCode} </h5>
            <hr />
            {displayDescription(responseContext)}
            {displayExample(responseContext)}
            {displayType(responseContext)}
            {displayReference(responseContext, components)}

            <h5>Description</h5>

            <div>{responseContext.description} </div>

            <hr />
        </div>
    );
};

export default Response;
