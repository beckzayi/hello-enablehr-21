import React from 'react';
import OperationId from './operationId';

export default ({ operationId, content }) => (
    <div className="section">
        <h3 className="section-title">Summary:</h3>
        <OperationId content={operationId} />
        <p className="block-content">{content}</p>
    </div>
);
