import React from 'react';

export default (props) => (
    <>
        <button
            className={`btn btn-${props.graphql ? `enablehr` : `secondary`} mr-1`}
            onClick={() => props.onOptionClick(true)}>
            GraphQL
        </button>
        <button
            className={`btn btn-${props.graphql ? `secondary` : `enablehr`}`}
            onClick={() => props.onOptionClick(false)}>
            REST
        </button>
    </>
);
