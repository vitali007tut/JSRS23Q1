import GarageView from "./main/garage-view";
import MainView from "./main/main-view";
import WinnersView from "./main/winners-view";
import { createElement } from "./utils/utils";

export default class Header {
  private NameButtons = {
    GARAGE: 'To Garage',
    WINNERS: 'To Winners',
  };
  private classButton = {
    GARAGE: 'garage-button',
    WINNERS: 'winners-button',
  }
  
  private garageButton: HTMLElement = createElement('a', [this.classButton.GARAGE], this.NameButtons.GARAGE);
  private winnersButton: HTMLElement = createElement('a', [this.classButton.WINNERS], this.NameButtons.WINNERS);
  private header: HTMLElement = createElement('header', ['header']);

  public create(mainComponent: MainView): HTMLElement {
    this.garageButton.classList.add('active');
    this.header.append(this.garageButton, this.winnersButton);

    const garageView = new GarageView().create();
    this.garageButton.addEventListener('click', () => {
      this.winnersButton.classList.remove('active');
      this.garageButton.classList.remove('active');
      this.garageButton.classList.add('active');
      mainComponent.setContent(garageView);
    })
    mainComponent.setContent(garageView);

    const winnersView = new WinnersView().create();
    this.winnersButton.addEventListener('click', () => {
      this.garageButton.classList.remove('active');
      this.winnersButton.classList.remove('active');
      this.winnersButton.classList.add('active');
      mainComponent.setContent(winnersView);
    })

    return this.header;
  }
}