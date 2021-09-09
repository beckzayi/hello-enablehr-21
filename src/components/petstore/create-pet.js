import React from 'react';
import Loadable from '@loadable/component';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = Loadable(() => import('swagger-ui-react'));

const CreatePet = () => (
    <div>
        <SwaggerUI url="/api/petstore/create-pet.json" docExpansion="list" defaultModelsExpandDepth={0} />
    </div>
);

export default CreatePet;
