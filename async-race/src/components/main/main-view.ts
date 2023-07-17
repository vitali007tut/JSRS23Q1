import { createElement } from "../utils";

export default class MainView {
  private main: HTMLElement = createElement('main', 'main');
  public create(): HTMLElement { 
    return this.main;
  }

  public setContent(content: HTMLElement): void {
    const htmlElement = this.main;
    while (htmlElement.firstElementChild) {
        htmlElement.firstElementChild.remove();
    }
    this.main.append(content);
  }
}