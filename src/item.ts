import axios from 'axios';

export interface IItem {
    name: string;
    username: string;
    email: string;
    company: {
        name: string;
        catchPhrase: string;
    };
}

export interface IItemRepository {
    getAllItems(): Promise<IItem[]>;
    getItems(filter: string): Promise<IItem[]>;
}

export interface IItemView {
    renderItemForList(item: IItem): string;
}

class ItemController implements IItemRepository, IItemView {
    private url = 'https://jsonplaceholder.typicode.com/users';

    getAllItems(): Promise<IItem[]> {
        return axios.get(this.url).then(result => result.data);
    }

    getItems(filterString: string): Promise<IItem[]> {
        return axios.get(this.url).then(result => {
            return result.data.filter((item: any) => {
                console.log(item.name + ' => ' + item.name.startsWith(filterString));
                return item.name.startsWith(filterString);
            });
        });
    }

    renderItemForList(item: IItem): string {
        const itemTemplate = `
        <a data-toggle="list" href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${item.name}</h5>
          <small>${item.username}</small>
        </div>
        <p class="mb-1">${item.company.name} | ${item.company.catchPhrase}</p>
        <small>${item.email}</small>
        </a>`;

        return itemTemplate;
    }
}

export const itemController = new ItemController();
