import React from 'react';
import Loadable from '@loadable/component';

const SwaggerUI = Loadable(() => import('swagger-ui-react'));

const GetPost = () => (
    <div>
        <SwaggerUI url="/api/jsonplaceholder/get-post.json" docExpansion="list" />
    </div>
);

export default GetPost;
