import { createElement, createImgElement, viewByCharacters, winModalWindow } from '../components/utils';

test('Create element function', () => {
    const element = createElement('T', 'test-class', 'some-content');
    expect(element.className).toBe('test-class');
    expect(element.tagName).toBe('T');
    expect(element.textContent).toBe('some-content');
});

test('Create image element', () => {
    const imgElement = createImgElement('test-class', './asserts/king.svg');
    expect(imgElement.tagName).toBe('IMG');
    expect(imgElement.className).toBe('figure test-class');
    expect(imgElement.className).toContain('test-class');
    expect(imgElement.src).toContain('/asserts/king.svg');
});

test('Test function viewByCharacters', () => {
    const input = document.createElement('input');
    setTimeout(() => {
        viewByCharacters('wordString', input);
        expect(input.value).toBe('wordString');
    }, 1000);
});

test('Test modal window', () => {
    const element = document.createElement('div');
    winModalWindow(element);
    expect(document.querySelector('.modal-overlay')).toBeDefined();
    expect(document.querySelector('.modal')).toBeDefined();
});
