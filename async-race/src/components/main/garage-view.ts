import { createElement, createInputElement } from "../utils";
import { CarType, InputType } from "../base";
import ImageElements from "../image-elements";

export default class GarageView {
  private raceButton: HTMLElement;
  private resetButton: HTMLElement;
  private generateButton: HTMLElement;
  private createButton: HTMLElement;
  private updateButton: HTMLElement;
  private inputTextCreate: HTMLInputElement;
  private inputTextUpdate: HTMLInputElement;
  private container: HTMLElement;
  private controls: HTMLElement;
  private garage: HTMLElement;
  private numberCarsInGarage: HTMLElement;
  private numberPagesInGarage: HTMLElement;
  private baseUrl: string = 'http://127.0.0.1:3000';
  private Path = {
    GARAGE: '/garage',
  } 
  private carsArray: CarType[];

  public create(): HTMLElement {
    this.container = createElement('div', 'garage-container');
    this.container.append(this.createControls(), this.createGarage());
    return this.container;
  }
  private createControls(): HTMLElement {
    this.controls = createElement('div', 'controls');
    this.inputTextCreate = createInputElement('createText', 'text');
    const createLine = this.createControlLine({ className: 'create-line', inputTextElement: this.inputTextCreate, inputColorId: 'createColor'});
    this.createButton = createElement('a', 'buttonCreate', 'Create');
    this.createButton.addEventListener('click', () => this.createNewCar());
    createLine.append(this.createButton);
    this.inputTextUpdate = createInputElement('updateText', 'text');
    this.inputTextUpdate.setAttribute('disabled', "true");
    const updateLine = this.createControlLine({ className: 'update-line', inputTextElement: this.inputTextUpdate, inputColorId: 'updateColor'});
    this.updateButton = createElement('a', 'buttonUpdate', 'Update');
    this.updateButton.addEventListener('click', () => this.updateCar());
    updateLine.append(this.updateButton);
    const commonLine = createElement('div', 'common-line');
    this.raceButton = createElement('a', 'race-button', 'Race');
    this.raceButton.addEventListener('click', () => this.race())
    this.resetButton = createElement('a', 'reset-button', 'Reset');
    this.resetButton.addEventListener('click', () => this.reset())
    this.generateButton = createElement('a', 'generate-button', 'Generate Cars');
    this.generateButton.addEventListener('click', () => this.generate())
    commonLine.append(this.raceButton, this.resetButton, this.generateButton)
    this.controls.append(createLine, updateLine, commonLine);
    return this.controls;
}
  public createGarage(): HTMLElement {
    this.garage = createElement('div', 'garage');
    
    this.numberCarsInGarage = createElement('div', 'cars-number');
    this.numberPagesInGarage = createElement('div', 'pages-number')
    this.garage.append(this.numberCarsInGarage, this.numberPagesInGarage);
    this.getArrayOfCars()
    return this.garage;
  }

  private createControlLine(params: InputType): HTMLElement {
    const line = createElement('div', params.className);
    const inputColor: HTMLInputElement = createInputElement(params.inputColorId, 'color', '#ffffff');
    line.append(params.inputTextElement, inputColor);
    return line;
  }

  private createNewCar(): void {
    console.log('create new car')
  }

  private updateCar(): void {
    console.log('update car');
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

  private async getCarsFromGarage() {
    const data = await fetch(`${this.baseUrl}${this.Path.GARAGE}`)
    const result = await data.json()
    this.numberCarsInGarage.innerHTML = `Garage(${result.length})`;
    return result;
  }

  private async getArrayOfCars() {
    const data = await this.getCarsFromGarage();
    data.forEach((element: CarType) => {
      const carElement = createElement('div', element.name);
      carElement.innerHTML = ImageElements.getCar(element.color);
      this.garage.append(carElement);
    });
    }
    // return data;
  }