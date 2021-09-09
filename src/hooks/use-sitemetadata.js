import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query siteMetadata {
            site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    siteUrl: url
                    defaultImage: image
                }
            }
        }
    `);
    return data.site.siteMetadata;
};

export default useSiteMetadata;
