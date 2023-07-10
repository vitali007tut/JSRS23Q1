import InputScreen from '../components/inputScreen';

test('Input screen element creates', () => {
    const inputScreen = new InputScreen();
    const createdElement = inputScreen.create();
    expect(createdElement).toBeDefined();
    expect(createdElement.className).toBe('css-editor');
    expect(inputScreen.input.id).toBe('editor');
    expect(inputScreen.inputBtn.type).toBe('submit');
});
