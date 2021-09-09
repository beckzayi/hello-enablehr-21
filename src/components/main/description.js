import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ content }) => (
    <div className="section">
        <h3 className="section-title">Description:</h3>
        <div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    </div>
);
