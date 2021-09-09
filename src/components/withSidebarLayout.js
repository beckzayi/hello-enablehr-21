/**
 * Layout containing Sidebar component
 * i.e. <WithSidebarLayout>Your Component</WithSidebarLayout>
 */

import React from 'react';
import Sidebar from './sidebar/sidebar';

export default (props) => (
    <div className="container-fluid">
        <div className="row">
            <Sidebar />
            <div className="col-md-9 col-xl-10 bd-content">{props.children}</div>
        </div>
    </div>
);
