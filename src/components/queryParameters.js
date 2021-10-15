import React from 'react';
import Parameter from './parameter';

export default ({ parameters }) => {
    return (
        <div className="section">
            {parameters.length > 0 && (
                <div>
                    <h4 className="section-title">Query String Parameters</h4>
                    <div className="table-responsive">
                        <table className="table table-parameters">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }}>Name</th>
                                    <th style={{ width: '6%' }}>Type</th>
                                    <th style={{ width: '6%' }}>Required</th>
                                    <th className="text-center" style={{ width: '24%' }}>
                                        Example
                                    </th>
                                    <th style={{ width: '54%' }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {parameters.map((p) => (
                                    <Parameter key={p.name} parameter={p} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};
