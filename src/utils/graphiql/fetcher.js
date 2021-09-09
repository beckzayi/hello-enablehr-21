import { endpoint_graphql } from '../endpoint';

const graphQLFetcher = (graphQLParams) => {
    return fetch(endpoint_graphql, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(graphQLParams),
    }).then((res) => res.json());
};

export default graphQLFetcher;
