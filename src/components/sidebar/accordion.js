import React from 'react';
import { Link } from 'gatsby';
import Item from './item';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
        };
    }

    toggleAccordion = () => {
        this.setState({
            isExpand: !this.state.isExpand,
        });
    };

    openAccordion = () => {
        this.setState({
            isExpand: true,
        });
    };

    render() {
        return (
            <li key={this.props.title} className="bd-toc-item">
                <div className={`bd-toc-link ${this.state.isExpand ? 'active' : ''}`} onClick={this.toggleAccordion}>
                    {this.props.items && <span className="icon icon-chevron-right"></span>}
                    {this.props.link ? <Link to={this.props.link}>{this.props.title}</Link> : this.props.title}
                </div>
                {this.props.items && (
                    <ul className={`nav bd-sidenav ${this.state.isExpand ? `d-block` : `d-none`}`}>
                        {this.renderItems(this.props.items)}
                    </ul>
                )}
            </li>
        );
    }

    renderItems(items) {
        return items.map((subItem) => {
            if (subItem.items) {
                return <Accordion {...subItem} key={subItem.title} />;
            } else {
                return <Item key={subItem.title} {...subItem} onLinkClick={this.openAccordion} />;
            }
        });
    }
}

export default Accordion;
