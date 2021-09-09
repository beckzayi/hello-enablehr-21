import React from 'react';
import ReactMarkdown from 'react-markdown';

const Method = (props) => {
    const child = props.child;

    if (child) {
        return (
            <div>
                <h2>Description</h2>
                <ReactMarkdown>{child.description}</ReactMarkdown>
            </div>
        );
    } else {
        return null;
    }
};

export default Method;
