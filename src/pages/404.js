import React from 'react';
import WithSidebarLayout from '../components/withSidebarLayout';

const browser = typeof window !== 'undefined' && window;

const NotFound = () => {
    return (
        browser && (
            <WithSidebarLayout>
                <div>
                    <h2>Not Found</h2>
                    <div>This is 404 not found.</div>
                </div>
            </WithSidebarLayout>
        )
    );
};

export default NotFound;
