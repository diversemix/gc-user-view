import '@testing-library/jest-dom/extend-expect';
import { UserController } from './user';
import { IUser, IDataSource } from './types';

const testUser: IUser = {
    id: 123,
    name: 'Bob',
    username: 'widget',
    email: 'email',
    company: { name: 'company', catchPhrase: 'cp' },
};

const mockDataSource: IDataSource = {
    get(url: string) {
        return Promise.resolve({
            data: [testUser, testUser, testUser],
        });
    },
};

describe('User', () => {
    const controller: UserController = new UserController(mockDataSource);

    it('should get all users', () => {
        controller.getAllUsers().then(result => {
            expect(result).not.toBeNull();
            expect(result).toHaveLength(3);
        });
    });
});
