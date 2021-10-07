import React from 'react';

export default ({ method, url }) => (
    <div className="endpoint-method-url">
        <span className={`method-type-${method}`}>{method}</span>
        <span className="endpoint-method-url__path">{url}</span>
    </div>
);
