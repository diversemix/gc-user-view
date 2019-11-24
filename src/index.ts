import axios from 'axios';
import { IUser } from './types';
import { UserController } from './user';
import { PostController } from './post';

const userController = new UserController(axios);
const postController = new PostController(axios);

const renderPostsForUser = (user: IUser) => {
    console.log('rendering items...');
    postController.getPostsForUserId(user.id).then(posts => {
        posts.forEach((post: any) => {
            $('#item-list').append(postController.renderPostForList(post));
        });
    });
};

export const run = () => {
    console.log('run from library');

    $(document).ready(() => {
        console.log('loading...');
    });
};

export const doSelect = () => {
    // TODO: Search the list of items
    const searchText = ($('#search-text')[0] as HTMLInputElement).value || '';
    console.log(`Searching for: ${searchText}`);
    $('#search-button').addClass('d-none');
    $('#spinner').removeClass('d-none');

    userController.getUsers(searchText).then((users: IUser[]) => {
        console.log(`Found ${users.length} items`);
        let user = null;
        if (users) {
            user = users[0];
        }

        // Clear list
        const list = $('#item-list')[0];
        let child = list.lastElementChild;

        while (child) {
            console.log(`Removing ${child}`);
            list.removeChild(child);
            child = list.lastElementChild;
        }

        // Add items
        if (user) {
            renderPostsForUser(user);
        }

        $('#search-button').removeClass('d-none');
        $('#spinner').addClass('d-none');
    });
};
