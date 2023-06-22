import { createElement } from "./utils";

export default class HeaderScreen {
  public helpBtn: HTMLElement;

  public start(): HTMLElement {
    const header = createElement('div', 'header');
    header.appendChild(createElement('h1', undefined, 'RSS-CSS Selectors'));
    this.helpBtn = createElement('button', 'bth-help', 'HELP');
    header.appendChild(this.helpBtn);


    return header;
  }

  public viewByCharacters (word: string, inputPlace: HTMLInputElement): void {
    inputPlace.value = '';
    const arr = word.split('');
    arr.forEach((litter, index) => {
      setTimeout(() => {
        inputPlace.value += litter;
      }, index*500)
    })
  }
}