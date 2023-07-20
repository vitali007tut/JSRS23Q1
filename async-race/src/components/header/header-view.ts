import GarageView from "../main/garage-view";
import MainView from "../main/main-view";
import WinnersView from "../main/winners-view";
import { createElement } from "../utils/utils";
import Button from "./button";

export default class HeaderView { 
  // private NameButtons = {
  //   GARAGE: 'To Garage',
  //   WINNERS: 'To Winners',
  // };
  // private ClassButton = {
  //   GARAGE: 'garage-button',
  //   WINNERS: 'winners-button',
  // }
  private buttonElements: HTMLElement[] = [];
  private header: HTMLElement = createElement('header', ['header']);

  public create(mainComponent: MainView): HTMLElement { 
    const garageView = new GarageView().create();
    const winnersView = new WinnersView().create();
    const buttonsArray = [
      {
        className: 'garage-button',
        text: 'To Garage',
        callback: mainComponent.setContent(garageView),
      },
      {
        className: 'garage-button',
        text: 'To Garage',
        callback: mainComponent.setContent(winnersView),
      },
    ]
    // buttonsArray.forEach((item, index) => {
    //   const buttonElement = new Button().create(item, this.buttonElements)
    //   buttonElement.addEventListener('click', () => {
    //     item.callback;
    //   })
      
      // this.header.append(buttonElement);
      // buttonElement.setCallback(item.callback())
    // })



    // const garageButton = new Button().create(this.ClassButton.GARAGE, this.NameButtons.GARAGE)
    // const winnersButton = new Button().create(this.ClassButton.WINNERS, this.NameButtons.WINNERS)
    


    // this.header.append(garageButton, winnersButton)
    return this.header;
  }
}