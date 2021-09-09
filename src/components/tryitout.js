import React from 'react';

const TryItOut = (props) => {
    const httpverb = props.httpverb;
    const servers = props.servers;
    const url = props.url;

    return (
        <div>
            <h2>curl</h2>
            <div>{JSON.stringify(servers)}</div>
            <div>
                curl -X {httpverb} &quot;{servers}/{url}&quot; -H &quot;accept: application/json&quot;
            </div>
        </div>
    );
};

export default TryItOut;
