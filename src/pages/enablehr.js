import React from 'react';
import { Link } from 'gatsby';

const YAMLbuildtime = () => (
    <div>
        <Link to={'/accounts/self'}>/accounts/self</Link>
        <br />

        <Link to={'/ping'}>/ping</Link>
        <br />

        <Link to={'/users/self'}>/accounts/self</Link>
        <br />

        <Link to={'/accounts/{accountId}/action-status/{actionStatusId}'}>
            /accounts/&#123;accountId&#125;/action-status/&#123;actionStatusId&#125;
        </Link>
        <br />
    </div>
);
export default YAMLbuildtime;
