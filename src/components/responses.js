import React, { useState } from 'react';
import Response from './response';

export default ({ responses, url, method }) => {
    const arrayStatusCode = Object.keys(responses);
    const [status, setStatus] = useState(arrayStatusCode[0]);

    const handleClick = (e) => {
        setStatus(e.target.textContent);
    };

    return (
        <div className="section">
            <h2 className="section-title">Responses</h2>
            {arrayStatusCode.length > 0 && (
                <>
                    <ul className="nav nav-tabs" style={{ padding: 0 }}>
                        {arrayStatusCode.map((key) => (
                            <li className="nav-item" key={key}>
                                <span onClick={handleClick} className={`nav-link ${key === status ? 'active' : ''}`}>
                                    {key}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <ul style={{ padding: 0 }}>
                        {arrayStatusCode.map((key) => {
                            return (
                                <li key={key} style={{ display: key === status ? 'block' : 'none' }}>
                                    <Response key={key} response={responses[key]} url={url} method={method} />
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
        </div>
    );
};
