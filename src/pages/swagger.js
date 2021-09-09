import React from 'react';
import Loadable from '@loadable/component';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = Loadable(() => import('swagger-ui-react'));

const SwaggerPage = () => {
    const url = '/api/enablehr.json';

    return (
        <div>
            <div>
                <SwaggerUI url={url} deepLinking="true" docExpansion="none" defaultModelsExpandDepth={0} />
            </div>
        </div>
    );
};

export default SwaggerPage;
