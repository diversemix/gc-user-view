import { IUser, IDataSource, IUserRepository } from './types';

export class UserController implements IUserRepository {
    // TODO: Move the url onto the datasource
    private url = 'https://jsonplaceholder.typicode.com/users';
    private source: IDataSource;

    constructor(source: IDataSource) {
        this.source = source;
    }

    getAllUsers(): Promise<IUser[]> {
        return this.source.get(this.url).then(result => result.data);
    }

    getUsers(filterString: string): Promise<IUser[]> {
        return this.source.get(this.url).then(result => {
            return result.data.filter((user: any) => {
                console.log(user.name + ' => ' + user.name.startsWith(filterString));
                return user.name.startsWith(filterString);
            });
        });
    }
}
