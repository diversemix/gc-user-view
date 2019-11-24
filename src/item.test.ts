import '@testing-library/jest-dom/extend-expect';
import { itemController, IItem } from './item';

describe('Unit Tests', (): void => {
    const testItem: IItem = {
        name: 'Bob',
        username: 'widget',
        email: 'email',
        company: { name: 'company', catchPhrase: 'cp' },
    };

    describe('Item', (): void => {
        it('should render item for list', (): void => {
            const text = itemController.renderItemForList(testItem);
            expect(text).toContain(testItem.name);
            expect(text).toContain(testItem.username);
            expect(text).toContain(testItem.email);
            expect(text).toContain(testItem.company.name);
            expect(text).toContain(testItem.company.catchPhrase);
        });
    });
});
