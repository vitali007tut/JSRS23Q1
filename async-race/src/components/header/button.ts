import { createElement } from '../utils/utils';

export default class Button {
    create(param: { className: string; text: string }): HTMLElement {
        const button: HTMLElement = createElement('a', [param.className], param.text);
        return button;
    }
}
