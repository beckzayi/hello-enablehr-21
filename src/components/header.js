import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavLink = ({ to, text }) => (
    <li className="nav-item">
        <Link to={to} className="nav-link" activeClassName="current-page">
            {text}
        </Link>
    </li>
);

const StyledHeader = styled.header`
    min-height: 4rem;
    padding: 0 2em;
    background: ${(props) => props.theme.colors.principalGreen};
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.08);
`;

const StyledBrandLink = styled((props) => <Link {...props} />)`
    margin-right: 4em;
`;

const Header = () => (
    <StyledHeader className="navbar navbar-expand bd-navbar">
        <StyledBrandLink to="/" className="navbar-brand" aria-label="enableHR">
            <img src="/images/logo.svg" title="enableHR" alt="enableHR" />
        </StyledBrandLink>
        <div className="navbar-nav-scroll">
            <ul className="navbar-nav">
                <NavLink to="/" text="Home" />
                <NavLink to="/docs/" text="Documentation" />
                <NavLink to="/development/" text="Development" />
                <NavLink to="/faqs/" text="FAQ's" />
                <NavLink to="/contact-us/" text="Contact Us" />
            </ul>
        </div>
    </StyledHeader>
);

export default Header;
