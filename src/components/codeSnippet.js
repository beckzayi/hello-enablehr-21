import React, { useState } from 'react';
import getCodeSnippets from '../utils/getCodeSnippets';
import PrettyPrint from './prettyprint';

export default ({ url, method }) => {
    const { snippets } = getCodeSnippets(url, method);

    const [language, setLanguage] = useState('java');
    const handleOnClickLanguage = (lang) => {
        setLanguage(lang);
    };

    if (snippets) {
        return (
            <div className="section snippets">
                <h2 className="section-title">Code Generation</h2>
                <ul className="nav nav-tabs" style={{ padding: 0 }}>
                    {snippets.map(({ id, title }) => (
                        <li className="nav-item" key={id}>
                            <span
                                onClick={() => handleOnClickLanguage(id)}
                                className={`nav-link ${language == id ? 'active' : ''}`}>
                                {getLanguageTitle(title)}
                            </span>
                        </li>
                    ))}
                </ul>
                <ul style={{ padding: 0 }}>
                    {snippets.map((snippet) => {
                        const { id, content } = snippet;
                        const res = decodeURIComponent(content);
                        return (
                            <li key={id} style={{ display: language === id ? 'block' : 'none' }}>
                                <PrettyPrint jsonObj={res}></PrettyPrint>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else {
        return null;
    }
};

function getLanguageTitle(title) {
    if (title.indexOf(' ') > -1) {
        const arr = title.split(' ');
        return arr[0];
    }
    return title;
}
