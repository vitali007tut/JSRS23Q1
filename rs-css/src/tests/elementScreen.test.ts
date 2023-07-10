import ElementScreen from '../components/elementScreen';

test('Creating elements in constructor', () => {
    const elementScreen = new ElementScreen();
    expect(elementScreen.figures).toBeDefined();
    expect(elementScreen.description).toBeDefined();
    expect(elementScreen.figures.tagName).toBe('DIV');
    expect(elementScreen.description.tagName).toBe('DIV');
    expect(elementScreen.figures.className).toBe('figures');
    expect(elementScreen.description.className).toBe('description');
});

test('Start function create element', () => {
    const elementScreen = new ElementScreen();
    expect(elementScreen.start()).toBeDefined();
    expect(elementScreen.start().className).toBe('main');
});
