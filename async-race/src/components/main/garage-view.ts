import { createElement, createInputElement } from "../utils/utils";
import { CarType } from "../utils/base";
import CarLine from "./car-view/car-line";
import { createCarApi, getCarApi, getCarsOnPageApi, getNumberCarsApi, updateCarApi } from "../utils/api";
import ImageItems from "./car-view/image-items";
import CarList from "../utils/car-list";

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
  private buttonPrev: HTMLInputElement;
  private buttonNext: HTMLInputElement;
  private readonly FIRST_PAGE = 1;
  private readonly CARS_ON_PAGE = 7;
  private carsOnActivePage: number;
  private activePage: number = 1;
  private quantityPages: number;
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
    this.numberPagesInGarage = createElement('div', ['pages-number'])
    this.numberPagesInGarage.id = this.activePage.toString();
    garageDescription.append(this.numberCarsInGarage, this.numberPagesInGarage, this.garage, this.createPagesControls())
    this.setQuantityCars();
    this.carsViewInGarageOnPage(this.FIRST_PAGE);
    return garageDescription;
  }

  private createPagesControls(): HTMLElement {
    const container: HTMLElement = createElement('div', ['page-controls'])
    this.buttonPrev = createInputElement(['prev', 'buttonPrev', 'disabled'], 'button', 'Prev');
    this.buttonPrev.addEventListener('click', () => this.openPrevPage());
    this.buttonNext = createInputElement(['next', 'buttonNext', 'disabled'], 'button', 'Next');
    this.buttonNext.addEventListener('click', () => this.openNextPage());
    container.append(this.buttonPrev, this.buttonNext);
    return container;
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
    this.updateButton.disabled = true ;
  }

  private race(): void {
    console.log('race');
  }

  private reset(): void {
    console.log('reset');
  }

  private generate(): void {
    console.log('generate 100 cars');
    const MAX_QUANTITY_CARS_ON_PAGE = 7;
    this.addCarsToBase(this.generateListCars());
    this.setQuantityCars();
    const carsOnPage = document.querySelectorAll('.line').length;
    if (carsOnPage < MAX_QUANTITY_CARS_ON_PAGE) this.addCarsOnPage(carsOnPage)
  }

  private async setQuantityCars() {
    const quantity = await getNumberCarsApi()
    this.numberCarsInGarage.innerHTML = `Garage(${quantity})`;
    this.numberCarsInGarage.id = quantity;
    this.quantityPages = Math.ceil(Number(quantity) / this.CARS_ON_PAGE);
    this.numberPagesInGarage.innerHTML = `Page ${this.activePage}/${this.quantityPages}`;
    this.setActivePageButtons(this.activePage, this.quantityPages)
  }
  private async carsViewInGarageOnPage(page: number) {
    console.log('call carsViewInGarageOnPage', page)
    this.garage.innerHTML = '';
    const data = await getCarsOnPageApi(page);
    data.forEach((element: CarType) => {
      const carLine = new CarLine().create(element.name, element.color, element.id)
      this.garage.append(carLine);
    })
  }

  private async addCreatedCar() {
    const data = await createCarApi({ name: this.inputTextCreate.value, color: this.inputColorCreate.value })
    const dataCars = await getCarsOnPageApi(this.activePage);
    this.carsOnActivePage = dataCars.length;
    const carsOnPageBeforeAdding = document.querySelectorAll('.line').length;
    if (carsOnPageBeforeAdding < 7) {
      const carLine = new CarLine().create(data.name, data.color, data.id)
      this.garage.append(carLine);
    }
  } 

  private setActivePageButtons(pageActive: number, pagesQuantity: number) {
    if (pageActive > 1) {
      this.buttonPrev.disabled = false;
      this.buttonPrev.classList.remove('disabled');
    }
    if (pagesQuantity > pageActive) {
      this.buttonNext.disabled = false;
      this.buttonNext.classList.remove('disabled');
    }
  }

  private async openNextPage() {
    const quantity = this.numberCarsInGarage.id;
    this.quantityPages = Math.ceil(Number(quantity) / this.CARS_ON_PAGE);
    if (this.activePage < this.quantityPages) {
      this.activePage += 1;
      this.numberPagesInGarage.innerHTML = `Page ${this.activePage}/${this.quantityPages}`;
      this.numberPagesInGarage.setAttribute('id', this.activePage.toString())
      this.carsViewInGarageOnPage(this.activePage);
      if (this.buttonPrev.classList.contains('disabled')) this.buttonPrev.classList.remove('disabled');
      if (this.activePage === this.quantityPages) {
        this.buttonNext.classList.add('disabled');
      }
  }
  }

  private async openPrevPage() {
    this.activePage = Number(this.numberPagesInGarage.id)
    this.quantityPages = Math.ceil(Number(this.numberCarsInGarage.id) / this.CARS_ON_PAGE);
    if (this.activePage > this.FIRST_PAGE) {
      this.activePage -= 1;
      this.numberPagesInGarage.innerHTML = `Page ${this.activePage}/${this.quantityPages}`;
      this.numberPagesInGarage.setAttribute('id', this.activePage.toString());
      this.carsViewInGarageOnPage(this.activePage);
      if (this.activePage === this.FIRST_PAGE) this.buttonPrev.classList.add('disabled');
      if (this.buttonNext.classList.contains('disabled')) this.buttonNext.classList.remove('disabled');
    }
  }
  private generateListCars(): {name: string, color: string}[] {
    const NUMBER_CARS_FOR_GENERATE = 100;
    const NUMBER_BRANDS = CarList.length;
    return Array(NUMBER_CARS_FOR_GENERATE).fill(null).map(() => {
      const randomBrandNumber = this.getRandomNumber(NUMBER_BRANDS);
      const randomModelNumber = this.getRandomNumber(CarList[randomBrandNumber].models.length);
      return {
      name: `${CarList[randomBrandNumber].brand} ${CarList[randomBrandNumber].models[randomModelNumber]}`,
      color: this.getRandomColor()
      }
    });
  }
  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color: string = '#'
    for (let i = 0; i < 6; i += 1) {
      color += letters[this.getRandomNumber(letters.length)];
    }
    return color;
  }
  private getRandomNumber(numberElements: number): number {
    return Math.floor(Math.random() * numberElements)
  }
  private addCarsToBase(params: {name: string, color: string}[]) {
    params.forEach((item) => createCarApi(item))
  }
  private async addCarsOnPage(startIndex: number) {
    const data = await getCarsOnPageApi(this.activePage)
    data.forEach((element: CarType, index: number) => {
      if (index >= startIndex) {
        const carLine = new CarLine().create(element.name, element.color, element.id)
        this.garage.append(carLine);
      }
    })
  }
  }