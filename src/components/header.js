import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ to, text }) => (
    <li className="nav-item">
        <Link to={to} className="nav-link" activeClassName="current-page">
            {text}
        </Link>
    </li>
);

const Header = () => (
    <header className="navbar navbar-expand bd-navbar">
        <Link to="/" className="navbar-brand mr-5" aria-label="enableHR">
            <img src="/images/logo.svg" title="enableHR" alt="enableHR" />
        </Link>
        <div className="navbar-nav-scroll">
            <ul className="navbar-nav">
                <NavLink to="/" text="Home" />
                <NavLink to="/docs" text="Documentation" />
                <NavLink to="/development" text="Development" />
                <NavLink to="/faqs" text="FAQ's" />
                <NavLink to="/contact-us" text="Contact Us" />
            </ul>
        </div>
    </header>
);

export default Header;
