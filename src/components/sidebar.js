import React from 'react';
import { Link } from 'gatsby';

const Sidebar = () => (
    <nav className="bd-links" aria-label="main navigation">
        <div className="bd-toc-item">
            <div className="bd-toc-link">Pet Store (swagger ui)</div>
            <ul className="nav bd-sidenav">
                <li>
                    <Link to="/docs/pets/read-pet" activeClassName="current-page active bd-sidenav-active">
                        Read Pet
                    </Link>
                </li>
                <li>
                    <Link to="/docs/pets/create-pet" activeClassName="current-page active bd-sidenav-active">
                        Create Pet
                    </Link>
                </li>
                <li>
                    <Link to="/docs/pets/update-pet" activeClassName="current-page active bd-sidenav-active">
                        Update Pet
                    </Link>
                </li>
                <li>
                    <Link to="/docs/pets/delete-pet" activeClassName="current-page active bd-sidenav-active">
                        Delete Pet
                    </Link>
                </li>
            </ul>
        </div>
        <div className="bd-toc-item">
            <div className="bd-toc-link">Post (jsonplaceholder)</div>
            <ul className="nav bd-sidenav">
                <li>
                    <Link to="/docs/jsonplaceholder/all-posts" activeClassName="current-page active bd-sidenav-active">
                        All Posts
                    </Link>
                </li>
                <li>
                    <Link to="/docs/jsonplaceholder/read-post" activeClassName="current-page active bd-sidenav-active">
                        Read Post
                    </Link>
                </li>
            </ul>
        </div>
        <div className="bd-toc-item">
            <div className="bd-toc-link">Store</div>
            <ul className="nav bd-sidenav">
                <li>
                    <Link to="/docs/pets/read-store" activeClassName="current-page active bd-sidenav-active">
                        Read Store
                    </Link>
                </li>
                <li>
                    <Link to="/docs/pets/create-store" activeClassName="current-page active bd-sidenav-active">
                        Create Store
                    </Link>
                </li>
                <li>
                    <Link to="/docs/pets/update-store" activeClassName="current-page active bd-sidenav-active">
                        Update Store
                    </Link>
                </li>
                <li>
                    <Link to="/docs/pets/delete-store" activeClassName="current-page active bd-sidenav-active">
                        Delete Store
                    </Link>
                </li>
            </ul>
        </div>
        <div className="bd-toc-item">
            <div className="bd-toc-link">Subscription</div>
            <ul className="nav bd-sidenav">
                <li>
                    <Link
                        to="/docs/subscriptions/read-subscription"
                        activeClassName="current-page active bd-sidenav-active">
                        Read Subscription
                    </Link>
                </li>
                <li>
                    <Link
                        to="/docs/subscriptions/create-subscription"
                        activeClassName="current-page active bd-sidenav-active">
                        Create Subscription
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Sidebar;
