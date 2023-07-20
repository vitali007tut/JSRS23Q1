import { CarType } from "../../utils/base";
import { createElement } from "../../utils/utils";
import { getCarApi, getCarsOnPageApi, getNumberCarsApi, removeCarApi } from "../../utils/api";
import CarLine from "./car-line";

export default class CarButtons {
  private selectButton: HTMLElement;
  private removeButton: HTMLElement;
  private startButton: HTMLElement;
  private stopButton: HTMLElement;
  private readonly FIRST_PAGE: number = 1;
  public create() {

  }

  public getSelectButton(id: number): HTMLElement {
    const button = createElement('a', ['select', 'button', `${id}`], 'Select');
    button.addEventListener('click', async() => {
      console.log('select', id);
      const updateText: HTMLInputElement = document.querySelector('.updateText');
      updateText.removeAttribute('disabled');

      const updateButton: HTMLInputElement = document.querySelector('.buttonUpdate');
      updateButton.removeAttribute('disabled');
      updateButton.setAttribute('id', id.toString());
      
      document.querySelectorAll('.line').forEach(line => line.classList.remove('selected'));
      button.closest('.line').classList.add('selected')
      const data = await getCarApi(id);
      updateText.value = data.name;
      const updateColor: HTMLInputElement = document.querySelector('.updateColor');
      updateColor.value = data.color;
    })
    return button;
  }
  public getRemoveButton(id: number): HTMLElement {
    const button = createElement('a', ['remove', 'button', `${id}`], 'Remove');
    button.addEventListener('click', () => {
      removeCarApi(id);
      button.closest('.line').remove();
      this.updateGarageQuantity();
      const carsOnPageAfterRemove = document.querySelectorAll('.line').length
      if (carsOnPageAfterRemove < 7) {
        this.updateActivePage();
      }
      this.updatePageQuantity();

    })
    return button;
  }


  public getStartButton(): HTMLElement {
    return createElement('a', ['start', 'button'], 'A');
  }
  public getStopButton(): HTMLElement {
    return createElement('a', ['stop', 'button'], 'B');
  }

  private async updateGarageQuantity() {
    const quantity = await getNumberCarsApi();
    const carsNumber = document.querySelector('.cars-number');
    carsNumber.innerHTML = `Garage(${quantity})`;
    carsNumber.id = quantity;
  }
  
  private async updateActivePage() {
    const LAST_CAR_ON_PAGE = 6;
    const activePage = Number(document.querySelector('.pages-number').getAttribute('id'))
    const data = await getCarsOnPageApi(activePage);
    if (data.length > LAST_CAR_ON_PAGE) {
      const name = data[LAST_CAR_ON_PAGE].name;
      const color = data[LAST_CAR_ON_PAGE].color;
      const id = data[LAST_CAR_ON_PAGE].id;
      const lastLine = new CarLine().create(name, color, id);
      document.querySelector('.garage').append(lastLine);
    }
  }
  private async updatePageQuantity() {
    const CARS_ON_PAGE = 7;
    const carsQuantity = await getNumberCarsApi();
    const pagesNumberElement = document.querySelector('.pages-number')
    let activePage = Number(pagesNumberElement.getAttribute('id'));
    const carsOnPageAfterRemove = await getCarsOnPageApi(activePage);
    if (carsOnPageAfterRemove.length === 0) {
      if (activePage > 1) {
        activePage -= 1;
        pagesNumberElement.setAttribute('id', activePage.toString());
        const data = await getCarsOnPageApi(activePage);
        data.forEach((element: CarType) => {
          const carLine = new CarLine().create(element.name, element.color, element.id)
          document.querySelector('.garage').append(carLine);
        })
      }
    }
    const quantityPages = Math.ceil(Number(carsQuantity) / CARS_ON_PAGE)
    pagesNumberElement.innerHTML = `Pages ${activePage}/${quantityPages}`

    if (activePage === quantityPages) {
      const buttonNext = document.querySelector('.buttonNext')
      buttonNext.classList.add('disabled');
    }
    if (activePage === this.FIRST_PAGE) {
      const buttonPrev = document.querySelector('.buttonPrev')
      buttonPrev.classList.add('disabled');
    }

  }
}