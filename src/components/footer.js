import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 40px 0 20px 0;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.grey['500']};
`;

const StyledFooterSocial = styled.div`
    text-align: right;
    a:not(:last-child) {
        margin-right: 12px;
    }
`;

const Footer = () => (
    <StyledFooter>
        <div className="row">
            <div className="col">&copy; {new Date().getFullYear()} enableHR &middot; All rights reserved</div>
            <div className="col">
                <StyledFooterSocial>
                    <a href="https://www.facebook.com/enableHRAU/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/enablehr" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.svg" alt="Linkedin" />
                    </a>
                    <a href="https://twitter.com/enableHR" target="_blank" rel="noopener noreferrer">
                        <img src="/images/twitter.svg" alt="Twitter" />
                    </a>
                </StyledFooterSocial>
            </div>
        </div>
    </StyledFooter>
);

export default Footer;
