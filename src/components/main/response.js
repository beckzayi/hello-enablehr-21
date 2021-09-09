import React from 'react';
import getExampleValue from '../../utils/getExampleValue';
import PrettyPrint from '../prettyprint';

export default ({ response, statusCode }) => {
    const { description } = response;

    const res = getExampleValue(response);

    return (
        <div style={{ padding: '2rem 0' }}>
            <p>
                <strong>Status Code: </strong>
                {statusCode}
            </p>
            <p>
                <strong>Description: </strong>
                {description}
            </p>
            {res && (
                <div>
                    <PrettyPrint jsonObj={res}></PrettyPrint>
                </div>
            )}
        </div>
    );
};
