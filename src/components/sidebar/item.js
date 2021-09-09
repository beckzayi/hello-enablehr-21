import React from 'react';
import { Link } from 'gatsby';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    componentDidMount() {
        const { link } = this.props;
        if (link === window.location.pathname) {
            this.setState(
                {
                    isActive: true,
                },
                () => {
                    this.props.onLinkClick();
                }
            );
        }
    }

    render() {
        const { title, link } = this.props;
        return (
            <li className={`bd-toc-link ` + `${this.state.isActive ? 'isActive' : ''} `}>
                <Link to={link} activeClassName="current-page active bd-sidenav-active">
                    {title}
                </Link>
            </li>
        );
    }
}

export default Item;
