import docsSidebar from '../../data/sidebars/doc-links-dev.yaml';
import devSidebar from '../../data/sidebars/dev-links-dev.yaml';

const createHash = (link) => {
    let index = -1;
    if (link) {
        index = link.indexOf(`#`);
    }
    return index >= 0 ? link.substr(index + 1) : false;
};

const extendItem = (items, parentTitle, level) => {
    items.forEach((item) => {
        item.hash = createHash(item.link);
        item.parentTitle = parentTitle;
        item.level = level || 1;

        if (item.items) {
            extendItem(item.items, item.title, item.level + 1);
        }
    });
};

const extendItemList = (itemList) => {
    itemList.forEach((section) => {
        section.level = 0;
        if (section.items) extendItem(section.items, section.title);
    });
    return itemList;
};

const extendSidebarData = (item) => {
    return {
        title: item[0].title,
        breadcrumbTitle: item[0].breadcrumbTitle,
        key: item[0].key,
        disableExpandAll: item[0].disableExpandAll,
        disableAccordions: item[0].disableAccordions,
        items: extendItemList(item[0].items),
    };
};

export const getSidebarItems = (section) => {
    if (section == 'docs') {
        return extendSidebarData(docsSidebar);
    } else if (section == 'development') {
        return extendSidebarData(devSidebar);
    } else {
        return {};
    }
};

const itemListDocs = extendSidebarData(docsSidebar);

export { itemListDocs };
