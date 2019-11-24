import axios from 'axios';
import { IUser, IPostRepository, IPostView, IPost } from './types';

export class PostController implements IPostRepository, IPostView {
    private url = 'https://jsonplaceholder.typicode.com/post';

    getPostsForUserId(userId: number): Promise<IPost[]> {
        throw new Error('Method not implemented.');
    }

    renderPostForList(post: IPost): string {
        const userTemplate = `
        <a data-toggle="list" href="#" class="list-group-user list-group-user-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${post.title}</h5>
        </div>
        <p class="mb-1">${post.body}</p>
        </a>`;

        return userTemplate;
    }
}
