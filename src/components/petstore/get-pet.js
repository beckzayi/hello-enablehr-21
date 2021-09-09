import React from 'react';
import Loadable from '@loadable/component';

const SwaggerUI = Loadable(() => import('swagger-ui-react'));

const GetPet = () => (
    <div>
        <SwaggerUI url="/api/petstore/get-pet.json" docExpansion="list" />
    </div>
);

export default GetPet;
