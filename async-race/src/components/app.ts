import FigureElements from "./image-elements";
import Header from "./header";
import HeaderView from "./header/header-view";
import MainView from "./main/main-view";

export default class App {
  private readonly header = new Header();
  private readonly main = new MainView();

  constructor() {
    this.createView();
  }

  private createView() {
    document.body.append(this.header.create(this.main), this.main.create());

    // this.garageView.create(document.body);
    // this.winnersView.create(document.body);
  }

  public start(): void {
    

//     const container = document.createElement('div');
// container.classList.add('container');
// document.body.appendChild(container);
// container.innerHTML = FigureElements.getCar();

// const colorCreate: HTMLInputElement = document.querySelector('#colorCreate');
// colorCreate.addEventListener('input', () => {
//   container.innerHTML = FigureElements.getCar(colorCreate.value)
// })

// const container2 = document.createElement('div');
// container2.classList.add('container2');
// document.body.appendChild(container2);
// container2.innerHTML = FigureElements.getCar('blue');


// const container3 = document.createElement('div');
// container3.classList.add('container3');
// document.body.appendChild(container3);
// container3.innerHTML = FigureElements.getFlag();
  }
}