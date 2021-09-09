/* eslint-disable */

import React from 'react';
import YAMLData from '../content/enablehr.json';
import Endpoint from '../components/endpoint.js';

// How do we do this on a per page basis
// or do we take the whole file and walk it

// if we take the split files we have to find the parts
// from the other files and walk the references
//
const paths = YAMLData.paths;
const components = YAMLData.components;

const pathURI = Object.keys(paths).map((data, index) => {
    return <li key={`content_item_${index}`}>{data}</li>;
});

const pathChildren = Object.values(paths).map((data, index) => {
    return data;
});

const pathChildrenValues = pathChildren.map((data, index) => {
    return <li key={`content_item_${index}`}>{Object.keys(data)}</li>;
});

const methodsChildren = Object.values(pathChildren).map((data, index) => {
    return data;
});

const methods = methodsChildren.map((data, index) => {
    return <li key={`content_item_${index}`}>data</li>;
});

const endpoint = paths['/ping'];

const YAMLbuildtime = () => (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <h1>working away....</h1>
        <h1>{YAMLData.openapi}</h1>
        <h1>{YAMLData.info.contact.email}</h1>
        <h2>{YAMLData.info.contact.name}</h2>
        <h3>{YAMLData.info.contact.url}</h3>
        <h4>{YAMLData.info.description}</h4>
        <h4>{YAMLData.info.title}</h4>
        <h4>{YAMLData.info.description}</h4>

        <h1>Endpoint</h1>
        <Endpoint
            header={YAMLData}
            value={'/users/self'}
            endpointContext={paths['/users/self']}
            components={components}
        />
        <h1>Next one ------------------- </h1>
        <Endpoint header={YAMLData} value={'/ping'} endpointContext={paths['/ping']} components={components} />
        <h1>Next one ------------------- </h1>
        <Endpoint
            header={YAMLData}
            value={'/accounts/self'}
            endpointContext={paths['/accounts/self']}
            components={components}
        />
        <h1>Next one ------------------- </h1>
        <Endpoint
            header={YAMLData}
            value={'/accounts/{accountId}/action-status/{actionStatusId}'}
            endpointContext={paths['/accounts/{accountId}/action-status/{actionStatusId}']}
            components={components}
        />
    </div>
);
export default YAMLbuildtime;
