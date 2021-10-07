import React, { useState, useEffect } from 'react';
import getExampleValue, { getSchemaProperties } from '../utils/getExampleValue';
import PrettyPrint from './prettyprint';

const initialItemsToShow = 10;

export default ({ requestBody }) => {
    const { description } = requestBody,
        res = getExampleValue(requestBody),
        schema = getSchemaProperties(requestBody);

    console.log('%crequestBody ', 'color:yellow', requestBody);
    console.log('%c     schema ', 'color:gold', schema);
    const { properties, type, required } = schema;

    const mappedProperties = propMapping(properties),
        totalProperties = countTotalProperties(mappedProperties);

    const [displaySchema, setDisplaySchema] = useState(true);

    const [isExpand, setIsExpanded] = useState(true);

    useEffect(() => {
        if (totalProperties > initialItemsToShow) {
            setIsExpanded(false);
        }
    }, []);

    function handleClick(v) {
        setDisplaySchema(v);
    }

    function toggleSchema() {
        setIsExpanded(!isExpand);
    }

    let countProperty = 0;
    /**
     * Display the list of properties, with name and type
     * @param {array} properties
     * @returns {jsx}
     */
    function displayProperties(properties) {
        return (
            <ul>
                {properties.map((item) => {
                    countProperty += 1;
                    if (countProperty > initialItemsToShow && isExpand === false) {
                        return null;
                    }

                    const isRequired = required && required.indexOf(item.name) > -1;

                    return (
                        <li key={item.name}>
                            <div>
                                {item.name}&nbsp;
                                <span className={`cell--${item.type}`}>{`(${item.type})`}</span>
                                {isRequired && <span style={{ color: '#e6555f' }}>&nbsp;*</span>}
                                {item.properties && displayProperties(item.properties)}
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }

    return (
        <div className="section">
            <h4 className="section-title">Request Body</h4>

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
                        fontSize: '0.8125rem',
                    }}>
                    <div>
                        <p>
                            <strong>Type:</strong> <span className={`cell--${type}`}>{type}</span>
                        </p>
                    </div>

                    {/* TODO make this a table [Property, Type, Required] ordered by required first */}
                    {displayProperties(mappedProperties)}
                    {totalProperties > initialItemsToShow && (
                        <div className={isExpand ? `toggleExtra is-on` : `toggleExtra`} onClick={toggleSchema}>
                            {isExpand ? 'collapse' : '...show more'}
                        </div>
                    )}
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

/**
 * Count the total of all properties, including sub-properties
 * @param {array} items
 * @returns {boolean}
 */
function countTotalProperties(items) {
    return items.reduce(function (accumulator, currentItem) {
        accumulator += 1;
        if (currentItem.properties) {
            return countTotalProperties(currentItem.properties) + accumulator;
        }
        return accumulator;
    }, 0);
}
