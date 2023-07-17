import { createElement } from "../utils";


export default class Button {
  private CssClasses = {
    ITEM: 'button',
    ITEM_SELECTED: 'button-active',
};
  private button: HTMLElement;
  private buttons: Button[];

  create(param: {className: string, text: string}, buttons: HTMLElement[]): HTMLElement {
    this.button = createElement('a', param.className, param.text)
    // this.button.addEventListener('click', () => param.callback())
    return this.button;
  }
  // setCallback(callback: Function) {
  //   this.button.addEventListener('click', () => callback())
  // }
}