import React from 'react';

const Footer = () => (
    <footer>
        <div className="row">
            <div className="col">&copy; {new Date().getFullYear()} enableHR &middot; All rights reserved</div>
            <div className="col">
                <div className="footer-social">
                    <a href="https://www.facebook.com/enableHRAU/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/enablehr" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.svg" alt="Linkedin" />
                    </a>
                    <a href="https://twitter.com/enableHR" target="_blank" rel="noopener noreferrer">
                        <img src="/images/twitter.svg" alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
