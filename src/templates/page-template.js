import React from 'react';
import { graphql } from 'gatsby';
import Title from '../components/main/title';

import CustomContent from '../components/main/customContent';
import Url from '../components/main/url';
import Summary from '../components/main/summary';
import Description from '../components/main/description';
import Responses from '../components/main/responses';
import Parameters from '../components/main/parameters';
import RequestBody from '../components/main/requestBody';
import CodeSnippet from '../components/main/codeSnippet';
import { itemListDocs } from '../utils/sidebar/item-list';

export default ({ pageContext: { page }, data }) => {
    const { operationId, summary, description, method, url, responses, parameters, requestBody } = page;

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
    findPageItem(itemListDocs.items);
    return (
        <div>
            <section>
                <Title content={title} />
                <Url method={method} url={url} />
                {totalCount > 0 && <CustomContent body={edges[0].node.body} />}
                <Summary operationId={operationId} content={summary} />
                <Description content={description} />
                {parameters && parameters.length > 0 && <Parameters parameters={parameters} />}
                {requestBody && <RequestBody requestBody={requestBody} />}
                <Responses responses={responses} url={url} method={method} />
                <CodeSnippet url={url} method={method} />
            </section>
        </div>
    );
};

/**
 * The purpose of this query is to retrieve the custom content for each single API page, and will be inserted to this page template.
 * Query the desired mdx file via `identifier` which is passed from `context` in gatsby-node.js.
 * `operationId` is used as the `identifier` in the context in gatsby-node.js.
 * Its returned `data` object will be available in this same file.
 */
export const mdxQuery = graphql`
    query($identifier: String!) {
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
