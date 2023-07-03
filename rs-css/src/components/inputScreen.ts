import { createElement } from './utils';

export default class InputScreen {
    public input!: HTMLInputElement;
    public inputBtn!: HTMLInputElement;
    private answer!: string;

    public create(): HTMLDivElement {
        const inputScreen: HTMLDivElement = document.createElement('div');
        inputScreen.classList.add('css-editor');

        const editorTittle: HTMLElement = createElement('h4', 'editor-tittle', 'CSS Editor');

        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Type selector...';
        this.input.id = 'editor';

        this.inputBtn = document.createElement('input');
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
        }, 2000);
    }
    public setInputSuccessState(): void {
        this.input.value = '';
    }

    public submit(): string {
        this.answer = this.getInputValue();
        return this.answer;
    }
}
