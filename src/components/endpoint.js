import React from 'react';

export default ({ method, endpoint }) => (
    <div className="endpoint-method-url">
        <span className={`method-type-${method}`}>{method}</span>
        <span className="endpoint-method-url__path">{endpoint}</span>
    </div>
);
