import Header from "./header/header-view";
import MainView from "./main/main-view";

export default class App {
  private readonly header = new Header();
  private readonly main = new MainView();
  constructor() {
    this.createView();
  }
  private createView() {
    document.body.append(this.header.create(this.main), this.main.create());
  }
  public start(): void {
  }
}