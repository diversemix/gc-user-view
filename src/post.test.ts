import '@testing-library/jest-dom/extend-expect';
import { PostController } from './post';
import { IPost, IDataSource } from './types';

const testPost: IPost = {
    id: 123,
    userId: 456,
    title: 'My Post',
    body: 'Lots of waffle...',
};

const mockDataSource: IDataSource = {
    get(url: string) {
        return Promise.resolve({
            data: [testPost, testPost, testPost],
        });
    },
};

describe('Post', (): void => {
    const controller: PostController = new PostController(mockDataSource);

    it('should render post for list', (): void => {
        const text = controller.renderPostForList(testPost);
        // TODO

        // expect(text).toContain(testPost.id);
        // expect(text).toContain(testPost.userId);
        // expect(text).toContain(testPost.title);
        // expect(text).toContain(testPost.body);
    });
});
