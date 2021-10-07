import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ content }) => (
    <div className="endpoint-description mt-3">
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
);
