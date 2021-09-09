import React from 'react';
import YAMLData from '../content/enablehr.json';
import Endpoint from '../components/endpoint.js';

const paths = YAMLData.paths;
const components = YAMLData.components;

const basicTemplate = (props) => {
    const { pageContext } = props;
    const { endpoint } = pageContext;
    return (
        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
            <h1>Endpoint</h1>
            <Endpoint value={endpoint} endpointContext={paths[endpoint]} components={components} />
        </div>
    );
};
export default basicTemplate;
