import React from 'react';
import Accordion from './accordion';
import { getSidebarItems } from '../../utils/sidebar/item-list';

class Sidebar extends React.Component {
    render() {
        const path = this.props ? (this.props['*'] ? this.props['*'] : this.props.path ? this.props.path : ``) : ``;
        const section = path.split('/').filter((item) => item.length)[0];
        const sidebarItems = getSidebarItems(section);
        const { items } = sidebarItems;
        if (items) {
            return (
                <div className="col-md-3 col-xl-2 bd-sidebar">
                    <section aria-label="Secondary Navigation" id="SecondaryNavigation" className="doc-sidebar">
                        <ul className="nav bd-sidenav">
                            {items.map((item) => (
                                <Accordion {...item} key={item.title} />
                            ))}
                        </ul>
                    </section>
                </div>
            );
        } else {
            return <></>;
        }
    }
}

export default Sidebar;
