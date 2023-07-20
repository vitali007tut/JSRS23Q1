import { CarType } from "../../base";
import { createElement } from "../../utils/utils";
import { getCarApi, getCarsApi, getNumberCarsApi, removeCarApi } from "../../utils/api";
import CarLine from "./car-line";

export default class CarButtons {
  private selectButton: HTMLElement;
  private removeButton: HTMLElement;
  private startButton: HTMLElement;
  private stopButton: HTMLElement;

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
    const quantity = await getNumberCarsApi()
    document.querySelector('.cars-number').innerHTML = `Garage(${quantity})`;
    }
}