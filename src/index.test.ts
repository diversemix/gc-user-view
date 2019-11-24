import * as fs from 'fs';
import { getByDisplayValue } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

describe('HTML Unit Tests', (): void => {
    let root: HTMLElement;

    beforeAll((): void => {
        const html = fs.readFileSync('src/index.html', 'utf-8');
        const d = document.implementation.createHTMLDocument();
        root = d.getElementsByTagName('html')[0];
        root.innerHTML = html;
    });

    it('should render', (): void => {
        expect(root).not.toBeNull();

        const button = getByDisplayValue(root, 'Select');
        expect(button).not.toBeNull();
        expect(button.hasAttribute('onclick')).not.toBeNull();
        expect(button.classList).toContain('btn');
    });
});
