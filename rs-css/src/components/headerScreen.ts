import { createElement } from "./utils";

export default class HeaderScreen {
  public start(): HTMLElement {
    const header = createElement('div', 'header');
    header.appendChild(createElement('h1', undefined, 'RSS-CSS Selectors'));
    header.appendChild(createElement('button', 'bth-help', 'HELP'));
    return header;
  }
}