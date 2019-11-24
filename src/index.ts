import { itemController, IItem } from './item';

const renderItems = (items: IItem[]) => {
    console.log('rendering items...');
    items.forEach((item: any) => {
        $('#item-list').append(itemController.renderItemForList(item));
    });
};

export const run = () => {
    console.log('run from library');

    $(document).ready(() => {
        console.log('getting items...');
        itemController.getAllItems().then((items: IItem[]) => {
            renderItems(items);
        });
    });
};

export const doSearch = () => {
    // TODO: Search the list of items
    const searchText = ($('#search-text')[0] as HTMLInputElement).value || '';
    console.log(`Searching for: ${searchText}`);
    $('#search-button').addClass('d-none');
    $('#spinner').removeClass('d-none');

    itemController.getItems(searchText).then((items: any) => {
        $('#search-button').removeClass('d-none');
        $('#spinner').addClass('d-none');
        console.log(`Found ${items.length} items`);
        // Clear list
        const list = $('#item-list')[0];
        let child = list.lastElementChild;
        while (child) {
            console.log(`Removing ${child}`);
            list.removeChild(child);
            child = list.lastElementChild;
        }
        // Add items
        renderItems(items);
    });
};
