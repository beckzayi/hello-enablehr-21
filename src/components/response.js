import React from 'react';
import getExampleValue from '../utils/getExampleValue';
import PrettyPrint from './prettyprint';

export default ({ response }) => {
    const { description } = response;

    const res = getExampleValue(response);

    return (
        <div className="endpoint-response">
            <div>{description}</div>
            {res && (
                <div className="mt-2">
                    <PrettyPrint jsonObj={res}></PrettyPrint>
                </div>
            )}
        </div>
    );
};
