import React from 'react';
import Loadable from '@loadable/component';

const SwaggerUI = Loadable(() => import('swagger-ui-react'));

export default ({ url }) => (
    <div>
        <SwaggerUI url={url} docExpansion="list" />
    </div>
);
