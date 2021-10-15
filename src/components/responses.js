import React, { useState } from 'react';
import Response from './response';

export default ({ responses }) => {
    const statusCodes = Object.keys(responses);

    if (!statusCodes?.length) {
        return null;
    }

    const [status, setStatus] = useState(statusCodes?.length && statusCodes[0]);

    const handleClick = (e) => {
        setStatus(e.target.textContent);
    };

    return (
        <div className="section">
            <h2 className="section-title">Responses</h2>
            <ul className="nav nav-tabs" style={{ padding: 0 }}>
                {statusCodes.map((key) => (
                    <li className="nav-item" key={key}>
                        <span onClick={handleClick} className={`nav-link ${key === status ? 'active' : ''}`}>
                            {key}
                        </span>
                    </li>
                ))}
            </ul>
            <ul style={{ padding: 0 }}>
                {statusCodes.map((key) => {
                    return (
                        <li key={key} style={{ display: key === status ? 'block' : 'none' }}>
                            <Response key={key} response={responses[key]} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
