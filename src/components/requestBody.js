import React, { useState, useEffect } from 'react';
import PrettyPrint from './prettyprint';
import { getRefComponent, getExampleValue, loadSchema, listAllPropertiesOfSchema } from '../utils/parser';

const spec = require(process.env.GATSBY_API_SPEC_URL);

const initialItemsToShow = 10;

export default ({ requestBody }) => {
    const { description } = requestBody;

    const [sample, setSample] = useState(null);

    const [type, setType] = useState(null);
    const [required, setRequired] = useState([]);
    const [allProperties, setAllProperties] = useState([]);

    const [displaySchemaTab, setDisplaySchemaTab] = useState(true);
    const [totalProperties, setTotalProperties] = useState(0);
    const [isExpand, setIsExpanded] = useState(true);

    useEffect(async () => {
        const schema = await loadSchema(requestBody, spec);
        if (schema) {
            const exampleValue = getExampleValue(schema, spec);
            setSample(exampleValue);
        }

        const comp = await getRefComponent(schema.$ref, spec);
        setType(comp.type);
        setRequired(comp.required);

        const allProperties = await listAllPropertiesOfSchema(comp.properties, spec);
        setAllProperties(allProperties);

        const totalProps = countTotalProperties(allProperties);
        setTotalProperties(totalProps);

        if (totalProps > initialItemsToShow) {
            setIsExpanded(false);
        }
    }, []);

    function handleClickTab(value) {
        setDisplaySchemaTab(value);
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
                        <span
                            onClick={() => handleClickTab(true)}
                            className={`nav-link ${displaySchemaTab ? 'active' : ''}`}>
                            Schema
                        </span>
                    </li>
                    <li className="nav-item" aria-hidden="true">
                        <span
                            onClick={() => handleClickTab(false)}
                            className={`nav-link ${displaySchemaTab ? '' : 'active'}`}>
                            Example
                        </span>
                    </li>
                </ul>

                <div
                    style={{
                        padding: '2rem 0',
                        display: displaySchemaTab ? 'block' : 'none',
                        fontSize: '0.8125rem',
                    }}>
                    <div>
                        <p>
                            <strong>Type:</strong> <span className={`cell--${type}`}>{type}</span>
                        </p>
                    </div>

                    {/* TODO make this a table [Property, Type, Required] ordered by required first */}
                    {displayProperties(allProperties)}

                    {totalProperties > initialItemsToShow && (
                        <div className={isExpand ? `toggleExtra is-on` : `toggleExtra`} onClick={toggleSchema}>
                            {isExpand ? 'collapse' : '...show more'}
                        </div>
                    )}
                </div>

                {sample && (
                    <div
                        style={{
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            display: displaySchemaTab ? 'none' : 'block',
                        }}>
                        <PrettyPrint jsonObj={sample}></PrettyPrint>
                    </div>
                )}
            </div>
        </div>
    );
};

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
