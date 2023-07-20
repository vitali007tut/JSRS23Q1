import { createElement } from "../utils/utils";

export default class Button {
  private button: HTMLElement;
  create(param: {className: string, text: string}): HTMLElement {
    this.button = createElement('a', [param.className], param.text)
    return this.button;
  }
}