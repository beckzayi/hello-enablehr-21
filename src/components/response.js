import React, { useState, useEffect } from 'react';
import { getExampleValue, loadSchema } from '../utils/parser';
import PrettyPrint from './prettyprint';

const spec = require(process.env.GATSBY_API_SPEC_URL);

export default ({ response }) => {
    const { description } = response;

    const [sample, setSample] = useState(null);

    useEffect(async () => {
        const schema = await loadSchema(response);
        if (schema) {
            const exampleValue = getExampleValue(schema, spec);
            setSample(exampleValue);
        }
    }, []);

    return (
        <div className="endpoint-response">
            <div>{description}</div>
            {sample && (
                <div className="mt-2">
                    <PrettyPrint jsonObj={sample}></PrettyPrint>
                </div>
            )}
        </div>
    );
};
