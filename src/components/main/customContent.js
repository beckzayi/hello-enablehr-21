import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

/**
 * @param {string} body - the raw body of the function, which will need to be parsed in MDX Render
 */
export default ({ body }) => (
    <div className="section">
        <MDXRenderer>{body}</MDXRenderer>
    </div>
);
