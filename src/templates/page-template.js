import React from 'react';
import { graphql } from 'gatsby';
import { withTheme } from 'styled-components';
import Title from '../components/title';
import CustomContent from '../components/customContent';
import Endpoint from '../components/endpoint';
import Description from '../components/description';
import PathParameters from '../components/pathParameters';
import QueryParameters from '../components/queryParameters';
import Responses from '../components/responses';
import RequestBody from '../components/requestBody';
import CodeSnippet from '../components/codeSnippet';
import { getSidebarItems } from '../utils/sidebar/item-list';

const PageTemplate = ({ pageContext: { page, parameters, method, endpoint, slug }, data }) => {
    const { description, responses, parameters: query_parameters, requestBody } = page;

    // The `data` object is made available by graphql query
    const {
        allMdx: { edges, totalCount },
    } = data;

    // Find the `title` from the yaml file of sidebar items
    let title;
    const findPageItem = (docItems) => {
        docItems.forEach((item) => {
            if (item.link && item.link.includes(slug)) {
                title = item.title;
            } else {
                if (item.items) {
                    findPageItem(item.items);
                }
            }
        });
    };
    findPageItem(getSidebarItems('development').items);

    return (
        <div>
            <section>
                <Title content={title} />
                <Endpoint endpoint={endpoint} method={method} />
                <Description content={description} />
                {totalCount > 0 && <CustomContent body={edges[0].node.body} />}
                <div className="section">
                    {parameters?.length || query_parameters?.length || requestBody?.length ? <h2>Request</h2> : null}
                    {parameters && parameters.length > 0 && <PathParameters parameters={parameters} />}
                    {query_parameters && query_parameters.length > 0 && (
                        <QueryParameters parameters={query_parameters} />
                    )}
                    {requestBody && <RequestBody requestBody={requestBody} />}
                </div>
                <Responses responses={responses} />
                <CodeSnippet url={endpoint} method={method} />
            </section>
        </div>
    );
};

export default withTheme(PageTemplate);

/**
 * The purpose of this query is to retrieve the custom content for each single API page, and will be inserted to this page template.
 * Query the desired mdx file via `identifier` which is passed from `context` in gatsby-node.js.
 * `operationId` is used as the `identifier` in the context in gatsby-node.js.
 * Its returned `data` object will be available in this same file.
 */
export const mdxQuery = graphql`
    query ($identifier: String!) {
        allMdx(filter: { frontmatter: { operationId: { eq: $identifier } } }) {
            totalCount
            edges {
                node {
                    frontmatter {
                        operationId
                    }
                    body
                }
            }
        }
    }
`;
