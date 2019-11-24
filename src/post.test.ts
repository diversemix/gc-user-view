import '@testing-library/jest-dom/extend-expect';
import { postController } from './post';
import { IPost } from './types';

const testPost: IPost = {
    id: 123,
    userId: 456,
    title: 'My Post',
    body: 'Lots of waffle...',
};

describe('Post', (): void => {
    it('should render post for list', (): void => {
        const text = postController.renderPostForList(testPost);
        expect(text).toContain(testPost.id);
        expect(text).toContain(testPost.userId);
        expect(text).toContain(testPost.title);
        expect(text).toContain(testPost.body);
    });
});
