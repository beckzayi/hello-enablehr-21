import React from 'react';
import ReactMarkdown from 'react-markdown';

const Parameters = (props) => {
    const value = props.value;

    if (value && value.parameters) {
        return (
            <div>
                <h3>Parameters</h3>
                <hr />
                <table>
                    <thead
                        style={{
                            backgroundColor: '#fff',
                            padding: '0.2em 0.4em',
                            borderTop: '1px solid #c6cbd1',
                        }}>
                        <tr
                            style={{
                                backgroundColor: '#fff',
                                padding: '0.2em 0.4em',
                                borderTop: '1px solid #c6cbd1',
                            }}>
                            <th
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '0.2em 0.4em',
                                    borderTop: '1px solid #c6cbd1',
                                }}>
                                name
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '0.2em 0.4em',
                                    borderTop: '1px solid #c6cbd1',
                                }}>
                                allowEmptyValue
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '0.2em 0.4em',
                                    borderTop: '1px solid #c6cbd1',
                                }}>
                                example
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '0.2em 0.4em',
                                    borderTop: '1px solid #c6cbd1',
                                }}>
                                in
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '0.2em 0.4em',
                                    borderTop: '1px solid #c6cbd1',
                                }}>
                                required
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '0.2em 0.4em',
                                    borderTop: '1px solid #c6cbd1',
                                }}>
                                type
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '0.2em 0.4em',
                                    borderTop: '1px solid #c6cbd1',
                                }}>
                                description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.parameters &&
                            value.parameters.map((data, index) => {
                                return (
                                    // <div key={index}>
                                    <tr key={index}>
                                        <td
                                            style={{
                                                backgroundColor: '#999',
                                                padding: '0.2em 0.4em',
                                                borderTop: '1px solid #c6cbd1',
                                            }}>
                                            {data.name}
                                        </td>
                                        <td
                                            style={{
                                                backgroundColor: '#fff',
                                                padding: '0.2em 0.4em',
                                                borderTop: '1px solid #c6cbd1',
                                            }}>
                                            {data.allowEmptyValue === true ? 'true' : 'false'}
                                        </td>
                                        <td
                                            style={{
                                                backgroundColor: '#fff',
                                                padding: '0.2em 0.4em',
                                                borderTop: '1px solid #c6cbd1',
                                            }}>
                                            {data.example}
                                        </td>
                                        <td
                                            style={{
                                                backgroundColor: '#fff',
                                                padding: '0.2em 0.4em',
                                                borderTop: '1px solid #c6cbd1',
                                            }}>
                                            {data.in}
                                        </td>
                                        <td
                                            style={{
                                                backgroundColor: '#fff',
                                                padding: '0.2em 0.4em',
                                                borderTop: '1px solid #c6cbd1',
                                            }}>
                                            {data.required === true ? 'true' : 'false'}
                                        </td>
                                        <td
                                            style={{
                                                backgroundColor: '#fff',
                                                padding: '0.2em 0.4em',
                                                borderTop: '1px solid #c6cbd1',
                                            }}>
                                            {data.schema.type}
                                        </td>
                                        <td
                                            style={{
                                                backgroundColor: '#fff',
                                                padding: '0.2em 0.4em',
                                                borderTop: '1px solid #c6cbd1',
                                            }}>
                                            <ReactMarkdown>{data.description}</ReactMarkdown>
                                        </td>
                                    </tr>
                                    // </div>
                                );
                            })}
                    </tbody>
                </table>

                <h2>Operation Id</h2>
                {value.operationId}
            </div>
        );
    } else {
        return null;
    }
};

export default Parameters;
