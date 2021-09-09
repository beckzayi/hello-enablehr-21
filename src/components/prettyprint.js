import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const PrettyPrint = (props) => {
    let code = props.jsonObj;
    if (typeof props.jsonObj === 'object') {
        code = JSON.stringify(props.jsonObj, null, 2);
    }

    const theme = {
        plain: {
            color: '#e6ecf1',
            backgroundColor: '#183055',
        },
        styles: [
            {
                types: ['changed'],
                style: {
                    color: 'rgb(162,191,252)',
                    fontStyle: 'italic',
                },
            },
            {
                types: ['deleted'],
                style: {
                    textDecoration: 'line-through',
                },
            },
            {
                types: ['comment'],
                style: {
                    color: '#9daab6',
                    fontStyle: 'italic',
                },
            },
            {
                types: ['string', 'url', 'tag'],
                style: {
                    color: '#71a7ff',
                },
            },
            {
                types: ['variable', 'punctuation'],
                style: {
                    color: '#f8f8f2',
                },
            },
            {
                types: ['builtin', 'char', 'constant', 'function', 'class-name', 'keyword', 'attr-value'],
                style: {
                    color: '#61e3a5',
                },
            },
            {
                types: ['selector'],
                style: {
                    color: '#a6e22e',
                    fontStyle: 'italic',
                },
            },
            {
                types: ['operator', 'attr-name', 'boolean', 'number'],
                style: {
                    color: '#ff9d3d',
                },
            },
            {
                types: ['property'],
                style: {
                    color: '#ffd6ad',
                },
            },
            {
                types: ['doctype', 'namespace'],
                style: {
                    color: '#9daab6',
                },
            },
        ],
    };

    const lineNumberStyle = {
        opacity: '0.6',
        width: '2em',
        marginRight: '1em',
        display: 'inline-block',
        overflow: 'hidden',
        fontSize: '12px',
        lineHeight: '1.125rem',
        textAlign: 'right',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        backgroundColor: 'transparent',
        userSelect: 'none',
    };

    const lineTextStyle = {
        display: 'inline-block',
        lineHeight: '1.125rem',
        overflow: 'hidden',
    };

    const lineStyle = {
        lineHeight: '1.125rem',
    };

    const preStyle = {
        padding: '24px 24px 24px 8px',
        margin: '32px 0px',
        borderRadius: '4px',
    };

    return (
        <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style, ...preStyle }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i, style: lineStyle })}>
                            <span style={lineNumberStyle}>{i + 1}</span>
                            <span style={lineTextStyle}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </span>
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

export default PrettyPrint;
