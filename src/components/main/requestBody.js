import React, { useState } from 'react';
import getExampleValue, { getSchemaProperties } from '../../utils/getExampleValue';
import PrettyPrint from '../prettyprint';

export default ({ requestBody }) => {
    const { description } = requestBody;
    const res = getExampleValue(requestBody);

    const schema = getSchemaProperties(requestBody);
    const { properties, type, required } = schema;

    const mappedProperties = propMapping(properties);

    const [displaySchema, setDisplaySchema] = useState(true);

    const handleClick = (v) => {
        setDisplaySchema(v);
    };

    return (
        <div className="section">
            <h3 className="section-title">Request Body</h3>
            {description && <div>{description}</div>}

            <div
                style={{
                    marginTop: '1rem',
                }}>
                <ul className="nav nav-tabs">
                    <li className="nav-item" aria-hidden="true">
                        <span onClick={() => handleClick(true)} className={`nav-link ${displaySchema ? 'active' : ''}`}>
                            Schema
                        </span>
                    </li>
                    <li className="nav-item" aria-hidden="true">
                        <span
                            onClick={() => handleClick(false)}
                            className={`nav-link ${displaySchema ? '' : 'active'}`}>
                            Example
                        </span>
                    </li>
                </ul>

                <div
                    style={{
                        padding: '2rem 0',
                        display: displaySchema ? 'block' : 'none',
                    }}>
                    <div>
                        <p>
                            <strong>Type:</strong> <span className={`cell--${type}`}>{type}</span>
                        </p>
                    </div>
                    <ul>
                        {/* TODO make this a table [Property, Type, Required] ordered by required first */}
                        {mappedProperties.map((item) => {
                            const isRequired = required && required.indexOf(item.name) > -1;
                            return (
                                <li key={item.name}>
                                    <div>
                                        {item.name}&nbsp;
                                        <span className={`cell--${item.type}`}>{`(${item.type})`}</span>
                                        {isRequired && <span style={{ color: 'red' }}>&nbsp;*</span>}
                                        {Object.prototype.hasOwnProperty.call(item, 'properties') && (
                                            <ul>
                                                {item.properties.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        {subItem.name}
                                                        &nbsp;
                                                        <span className={`cell--${subItem.type}`}>
                                                            {`(${subItem.type})`}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {res && (
                    <div
                        style={{
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            display: displaySchema ? 'none' : 'block',
                        }}>
                        <PrettyPrint jsonObj={res}></PrettyPrint>
                    </div>
                )}
            </div>
        </div>
    );
};

/**
 * Put properties in an array
 * @param {object} properties
 * @return {Array}
 */
function propMapping(properties) {
    const result = Object.keys(properties).map((key) => {
        const obj = {
            name: key,
            type: properties[key].type,
        };
        if (Object.prototype.hasOwnProperty.call(properties[key], 'properties')) {
            const tmp = propMapping(properties[key].properties);
            return { ...obj, properties: tmp };
        }
        return obj;
    });

    return result;
}
