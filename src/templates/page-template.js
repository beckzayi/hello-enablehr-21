import React from 'react';
import { graphql } from 'gatsby';
import Title from '../components/title';

import CustomContent from '../components/customContent';
import Url from '../components/url';
import Description from '../components/description';
import Responses from '../components/responses';
import Parameters from '../components/parameters';
import ParametersPath from '../components/parametersPath';
import RequestBody from '../components/requestBody';
import CodeSnippet from '../components/codeSnippet';
import { getSidebarItems } from '../utils/sidebar/item-list';

const PageTemplate = ({ pageContext: { page }, data }) => {
    const { description, method, url, responses, parameters, path_parameters, requestBody } = page;

    // The `data` object is made available by graphql query
    const {
        allMdx: { edges, totalCount },
    } = data;
    const slug = page.slug;
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
                <Url method={method} url={url} />
                {totalCount > 0 && <CustomContent body={edges[0].node.body} />}
                <Description content={description} />
                <div className="section">
                    {path_parameters?.length || parameters?.length || requestBody?.length ? <h2>Request</h2> : null}
                    {path_parameters && path_parameters.length > 0 && <ParametersPath parameters={path_parameters} />}
                    {parameters && parameters.length > 0 && <Parameters parameters={parameters} />}
                    {requestBody && <RequestBody requestBody={requestBody} />}
                </div>
                <Responses responses={responses} url={url} method={method} />
                <CodeSnippet url={url} method={method} />
            </section>
        </div>
    );
};

export default PageTemplate;

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
