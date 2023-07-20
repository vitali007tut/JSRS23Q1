import { createElement, createInputElement } from "../utils/utils";
import { CarType } from "../base";
import ImageElements from "../NO-image-elements";
import CarLine from "./car-view/car-line";
import { createCarApi, getCarApi, getCarsApi, getNumberCarsApi, updateCarApi } from "../utils/api";
import ImageItems from "./car-view/image-items";

export default class GarageView {
  private raceButton: HTMLElement;
  private resetButton: HTMLElement;
  private generateButton: HTMLElement;
  private createButton: HTMLElement;
  private updateButton: HTMLInputElement;
  private inputTextCreate: HTMLInputElement;
  private inputTextUpdate: HTMLInputElement;
  private container: HTMLElement;
  private controls: HTMLElement;
  private garage: HTMLElement;
  private numberCarsInGarage: HTMLElement;
  private numberPagesInGarage: HTMLElement;
  private inputColorCreate: HTMLInputElement;
  private inputColorUpdate: HTMLInputElement;
  private carsArray: CarType[];

  public create(): HTMLElement {
    this.container = createElement('div', ['garage-container']);
    this.container.append(this.createControls(), this.createGarage());


    return this.container;
  }
  private createControls(): HTMLElement {
    this.controls = createElement('div', ['controls']);
    this.inputTextCreate = createInputElement(['createText'], 'text');
    const createLine = createElement('div', ['create-line']);
    this.inputColorCreate = createInputElement(['createColor'], 'color', '#ffffff');
    this.createButton = createElement('a', ['buttonCreate'], 'Create');
    this.createButton.addEventListener('click', () => this.createNewCar());
    createLine.append(this.inputTextCreate, this.inputColorCreate, this.createButton);
    this.inputTextUpdate = createInputElement(['updateText'], 'text');
    this.inputTextUpdate.setAttribute('disabled', "true");
    const updateLine = createElement('div', ['update-line']);
    this.inputColorUpdate = createInputElement(['updateColor'], 'color', '#ffffff');
    // this.updateButton = createElement('a', ['buttonUpdate'], 'Update');
    this.updateButton = createInputElement(['buttonUpdate'], 'button', 'Update');
    this.updateButton.disabled = true ;
    this.updateButton.addEventListener('click', () => this.updateCar());
    updateLine.append(this.inputTextUpdate, this.inputColorUpdate, this.updateButton);
    const commonLine = createElement('div', ['common-line']);
    this.raceButton = createElement('a', ['race-button'], 'Race');
    this.raceButton.addEventListener('click', () => this.race())
    this.resetButton = createElement('a', ['reset-button'], 'Reset');
    this.resetButton.addEventListener('click', () => this.reset())
    this.generateButton = createElement('a', ['generate-button'], 'Generate Cars');
    this.generateButton.addEventListener('click', () => this.generate())
    commonLine.append(this.raceButton, this.resetButton, this.generateButton)
    this.controls.append(createLine, updateLine, commonLine);
    return this.controls;
}
  public createGarage(): HTMLElement {
    this.garage = createElement('div', ['garage']);
    const garageDescription: HTMLElement = createElement('div', ['garage-description']);
    this.numberCarsInGarage = createElement('div', ['cars-number']);
    this.numberPagesInGarage = createElement('div', ['pages-number'], 'Page #')
    garageDescription.append(this.numberCarsInGarage, this.numberPagesInGarage, this.garage)
    this.setQuantityCars();
    this.carsViewInGarage();
    return garageDescription;
  }

  private async createNewCar() {
    this.addCreatedCar()
    this.setQuantityCars();
  }

  private async updateCar() {
    console.log('update car', this.updateButton.getAttribute('id'));
    this.inputTextUpdate.setAttribute('disabled', "true");
    document.querySelectorAll('.line').forEach(line => line.classList.remove('selected'));
    const id = Number.parseInt(this.updateButton.getAttribute('id'));
    const name = this.inputTextUpdate.value;
    const color = this.inputColorUpdate.value;
    const param = { name, color, id }
    await updateCarApi(param);
    const imageUpdateCar = document.querySelector(`.image-id-${id}`)
    imageUpdateCar.innerHTML = '';
    imageUpdateCar.innerHTML = ImageItems.getCar(color);
    document.querySelector(`.tittle-id-${id}`).innerHTML = name;
    this.inputTextUpdate.value = '';
  }

  private race(): void {
    console.log('race');
  }

  private reset(): void {
    console.log('reset');
  }

  private generate(): void {
    console.log('generate');
  }

  private async setQuantityCars() {
    const quantity = await getNumberCarsApi()
    this.numberCarsInGarage.innerHTML = `Garage(${quantity})`
  }
  private async carsViewInGarage() {
    this.garage.innerHTML = '';
    const data = await getCarsApi();
    data.forEach((element: CarType) => {
      const carLine = new CarLine().create(element.name, element.color, element.id)
      this.garage.append(carLine);
    })
  }

  private async addCreatedCar() {
    const data = await createCarApi({ name: this.inputTextCreate.value, color: this.inputColorCreate.value })
    const carLine = new CarLine().create(data.name, data.color, data.id)
    this.garage.append(carLine);
  } 
  }