import { createElement } from './utils';

export default class InputScreen {
    public input: HTMLInputElement;
    public inputBtn: HTMLInputElement;
    private readonly DELAY_FOR_REMOVE_ANIMATION: number = 2000;
    constructor() {
        this.input = document.createElement('input');
        this.inputBtn = document.createElement('input');
    }
    public create(): HTMLElement {
        const inputScreen: HTMLElement = createElement('div', 'css-editor');
        const editorTittle: HTMLElement = createElement('h4', 'editor-tittle', 'CSS Editor');
        this.input.type = 'text';
        this.input.placeholder = 'Type selector...';
        this.input.id = 'editor';
        this.inputBtn.type = 'submit';
        this.inputBtn.value = 'Enter';
        inputScreen.appendChild(editorTittle);
        inputScreen.appendChild(this.input);
        inputScreen.appendChild(this.inputBtn);
        return inputScreen;
    }
    public getInputValue(): string {
        return this.input.value;
    }
    public setInputErrorState(snakedElement: HTMLElement): void {
        this.input.classList.add('shake');
        snakedElement.classList.add('shake');
        setTimeout(() => {
            this.input.classList.remove('shake');
            snakedElement.classList.remove('shake');
        }, this.DELAY_FOR_REMOVE_ANIMATION);
    }
    public setInputSuccessState(): void {
        this.input.value = '';
    }
}
