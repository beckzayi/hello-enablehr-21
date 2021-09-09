import React from 'react';
import Description from '../components/description.js';
import Response from '../components/responses.js';
import Parameters from '../components/parameters.js';

function getresponse(child, components) {
    if (child) {
        return (
            <div>
                <h2>Responses</h2>
                {Object.keys(child.responses).map((data, index) => {
                    return (
                        <Response
                            key={index}
                            responseCode={data}
                            responseContext={child.responses[data]}
                            components={components}></Response>
                    );
                })}
            </div>
        );
    }
}

const Endpoint = (props) => {
    const value = props.value;
    const endpointContext = props.endpointContext;
    const components = props.components;
    const child = endpointContext[props.child];

    return (
        <div>
            <div>
                <h4>
                    {props.child} {value}
                </h4>
                <button>Try it Out</button>
            </div>

            <Description child={child} />

            <Parameters value={child} />

            {getresponse(child, components)}
        </div>
    );
};

export default Endpoint;
