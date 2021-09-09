import React from 'react';
import SEO from './main/seo';
import Header from './header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer';
import '../styles/app.scss';

const Layout = (props) => {
    let displaySidebar = isDisplaySidebar(props);
    return (
        <div>
            <SEO {...props} />
            <Header />

            {/*
                If displaySidebar is true, Sidebar will be included.
                If displaySidebar is false, then only display the child component without Sidebar.
            */}
            {displaySidebar ? (
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar {...props} />
                        <div className="col-md-9 col-xl-9 bd-content position-relative">
                            <div>{props.children}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-xl-12 bd-content">{props.children}</div>
                    </div>
                </div>
            )}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 offset-md-3 col-xl-8 offset-xl-2 py-md-3 pl-md-5">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;

/**
 * Check if the page is going to display sidebar
 * @param {Object} props
 * @return Boolean
 */
function isDisplaySidebar(props) {
    // Set a Boolean value for displaySidebar which can be set in Markdown files
    let displaySidebar = props.pageContext?.frontmatter?.displaySidebar;

    // If displaySidebar is not set in Markdown, then set it as true by default.
    // For example, the pages created from gatsby-node.js have displaySidebar as true by default.
    displaySidebar = displaySidebar === false ? false : true;

    // For JS files (not Markdown) in src/pages, displaySidebar is false by default.
    // To include Sidebar in the JS file (src/pages), use withSidebarLayout
    if (!props.pageContext.frontmatter && !props.pageContext.identifier) {
        displaySidebar = false;
    }
    return displaySidebar;
}
