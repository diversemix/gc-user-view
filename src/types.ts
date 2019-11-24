export interface IDataSource {
    get(url:string): Promise<any>
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    company: {
        name: string;
        catchPhrase: string;
    };
}

export interface IUserRepository {
    getAllUsers(): Promise<IUser[]>;
    getUsers(filter: string): Promise<IUser[]>;
}

export interface IPostRepository {
    getPostsForUserId(userId: number): Promise<IPost[]>;
}

export interface IPostView {
    renderPostForList(post: IPost): string;
}

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}