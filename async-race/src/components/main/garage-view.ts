import {
    createElement,
    createModalText,
    findSelector,
    getAttribute,
    getDistance,
    getRandomColor,
    getRandomNumber,
    removeModalText,
} from '../utils/utils';
import { CarType } from '../utils/base';
import CarLine from './car-view/car-line';
import ImageItems from './car-view/image-items';
import CarList from '../utils/car-list';
import WinnersView from './winners-view';
import EngineService from '../utils/engine-service';
import GarageService from '../utils/garage-service';
import WinnersService from '../utils/winners-service';

export default class GarageView {
    private updateButton: HTMLInputElement;
    private inputTextCreate: HTMLInputElement;
    private inputTextUpdate: HTMLInputElement;
    private garage: HTMLElement;
    private numberCarsInGarage: HTMLElement;
    private numberPagesInGarage: HTMLElement;
    private inputColorCreate: HTMLInputElement;
    private inputColorUpdate: HTMLInputElement;
    private buttonPrev: HTMLInputElement;
    private buttonNext: HTMLInputElement;
    private readonly FIRST_PAGE = 1;
    private readonly CARS_ON_PAGE = 7;
    private activePage = 1;
    private quantityPages = 1;
    private event: Event;
    private numberForFirstWinner = 0;
    private readonly NUMBER_FOR_RESET: number = 10;
    private readonly FIRST_WIN: number = 1;
    private readonly MAX_QUANTITY_CARS_ON_PAGE = 7;
    private engineService = new EngineService();
    private garageService = new GarageService();
    private winnersService = new WinnersService();

    constructor() {
        this.updateButton = createElement({ tag: 'input', classList: ['buttonUpdate'] });
        this.updateButton.type = 'button';
        this.updateButton.value = 'Update';
        this.inputTextCreate = createElement({ tag: 'input', classList: ['createText'] });
        this.inputTextCreate.type = 'text';
        this.inputTextUpdate = createElement({ tag: 'input', classList: ['updateText'] });
        this.inputTextUpdate.type = 'text';
        this.garage = createElement({ tag: 'div', classList: ['garage'] });
        this.numberCarsInGarage = createElement({ tag: 'div', classList: ['cars-number'] });
        this.numberPagesInGarage = createElement({ tag: 'div', classList: ['pages-number'] });
        this.inputColorCreate = createElement({ tag: 'input', classList: ['createColor'] });
        this.inputColorCreate.type = 'color';
        this.inputColorCreate.value = '#ffffff';
        this.inputColorUpdate = createElement({ tag: 'input', classList: ['updateColor'] });
        this.inputColorUpdate.type = 'color';
        this.inputColorUpdate.value = '#ffffff';
        this.buttonPrev = createElement({ tag: 'input', classList: ['prev', 'buttonPrev', 'disabled'] });
        this.buttonPrev.type = 'button';
        this.buttonPrev.value = 'Prev';
        this.buttonNext = createElement({ tag: 'input', classList: ['next', 'buttonNext', 'disabled'] });
        this.buttonNext.type = 'button';
        this.buttonNext.value = 'Next';
        this.event = new Event('click');
    }

    public create(): HTMLElement {
        const container = createElement({ tag: 'div', classList: ['garage-container'] });
        container.append(this.createControls(), this.createGarage());

        return container;
    }

    private createControls(): HTMLElement {
        const controls = createElement({ tag: 'div', classList: ['controls'] });
        const createLine = createElement({ tag: 'div', classList: ['create-line'] });
        const createButton = createElement({ tag: 'a', classList: ['buttonCreate'], textContent: 'Create' });
        createButton.addEventListener('click', () => this.createNewCar());
        createLine.append(this.inputTextCreate, this.inputColorCreate, createButton);
        this.inputTextUpdate.setAttribute('disabled', 'true');
        const updateLine = createElement({ tag: 'div', classList: ['update-line'] });
        this.updateButton.disabled = true;
        this.updateButton.addEventListener('click', () => this.updateCar());
        updateLine.append(this.inputTextUpdate, this.inputColorUpdate, this.updateButton);
        const commonLine = createElement({ tag: 'div', classList: ['common-line'] });
        const raceButton: HTMLElement = createElement({ tag: 'a', classList: ['race-button'], textContent: 'Race' });
        raceButton.addEventListener('click', () => this.race());
        const resetButton: HTMLElement = createElement({ tag: 'a', classList: ['reset-button'], textContent: 'Reset' });
        resetButton.addEventListener('click', () => this.reset());
        const generateButton = createElement({
            tag: 'a',
            classList: ['generate-button'],
            textContent: 'Generate Cars',
        });
        generateButton.addEventListener('click', () => this.generate());
        commonLine.append(raceButton, resetButton, generateButton);
        controls.append(createLine, updateLine, commonLine);

        return controls;
    }

    public createGarage(): HTMLElement {
        const garageDescription: HTMLElement = createElement({ tag: 'div', classList: ['garage-description'] });
        this.numberPagesInGarage.id = this.activePage.toString();
        garageDescription.append(
            this.numberCarsInGarage,
            this.numberPagesInGarage,
            this.garage,
            this.createPagesControls()
        );
        this.setQuantityCars();
        this.carsViewInGarageOnPage(this.FIRST_PAGE);

        return garageDescription;
    }

    private createPagesControls(): HTMLElement {
        const container: HTMLElement = createElement({ tag: 'div', classList: ['page-controls'] });
        this.buttonPrev.addEventListener('click', () => this.openPrevPage());
        this.buttonNext.addEventListener('click', () => this.openNextPage());
        container.append(this.buttonPrev, this.buttonNext);

        return container;
    }

    private async createNewCar() {
        this.addCreatedCar();
        this.setQuantityCars();
    }

    private async updateCar() {
        this.inputTextUpdate.setAttribute('disabled', 'true');
        document.querySelectorAll('.line').forEach((line) => line.classList.remove('selected'));
        const id = Number.parseInt(getAttribute(this.updateButton, 'id'));
        const name = this.inputTextUpdate.value;
        const color = this.inputColorUpdate.value;
        const param = { name, color, id };
        await this.garageService.updateCar(param);
        const imageUpdateCar = findSelector(`.image-id-${id}`);
        imageUpdateCar.innerHTML = '';
        imageUpdateCar.innerHTML = ImageItems.getCar(color);
        findSelector(`.tittle-id-${id}`).innerHTML = name;
        this.inputTextUpdate.value = '';
        this.updateButton.disabled = true;
    }

    private race() {
        this.reset();
        this.numberForFirstWinner = 0;
        const distance = getDistance();
        document.querySelectorAll('.car-image').forEach(async (car) => {
            const id = Number(car.getAttribute('id'));
            const dataStarted = await this.engineService.startEngine(id);
            const startTime = new Date().getTime();
            const timeForAnimation = dataStarted.distance / dataStarted.velocity;
            const growInSec: number = (distance * 1000) / timeForAnimation;
            const animation = () => {
                const currentTime = new Date().getTime();
                const step: number = ((currentTime - startTime) / 1000) * growInSec;
                if (car instanceof HTMLElement && step < distance) {
                    car.style.transform = `translateX(${step}px)`;
                    const requestID = requestAnimationFrame(animation);
                    car.setAttribute('requestID', requestID.toString());
                }
            };
            animation();
            try {
                await this.engineService.driveEngine(id);
                this.numberForFirstWinner += 1;
                if (this.numberForFirstWinner === 1) {
                    const dataWinner = await this.winnersService.getWinnerApi(id);
                    const time = Number((timeForAnimation / 1000).toFixed(2));
                    const carWinner = await this.garageService.getCar(id);
                    createModalText(`Winner: ${carWinner.name}, time: ${time}sec`);
                    if (!!dataWinner.wins) {
                        this.updateWinner(id, time, dataWinner);
                    } else await this.winnersService.createWinnerApi({ id, wins: this.FIRST_WIN, time });
                    this.updateWinnersView();
                }
            } catch {
                const requestID = Number(car.getAttribute('requestID'));
                cancelAnimationFrame(requestID);
            }
        });
    }

    private reset(): void {
        this.numberForFirstWinner = this.NUMBER_FOR_RESET;
        createModalText();
        removeModalText();
        const carsForAnimation = document.querySelectorAll('.car-image');
        carsForAnimation.forEach(async (car) => {
            const id = Number(car.getAttribute('id'));
            const requestID = Number(car.getAttribute('requestID'));
            cancelAnimationFrame(requestID);
            await this.engineService.stopEngine(id);
            if (car instanceof HTMLElement) car.style.transform = `translateX(0px)`;
        });
    }
    private generate(): void {
        this.addCarsToBase(this.generateListCars());
        this.setQuantityCars();
        const carsOnPage = document.querySelectorAll('.line').length;
        if (carsOnPage < this.MAX_QUANTITY_CARS_ON_PAGE) this.addCarsOnPage(carsOnPage);
    }

    private async setQuantityCars() {
        const quantity = await this.garageService.getNumberCars();
        this.numberCarsInGarage.innerHTML = `Garage(${quantity})`;
        this.numberCarsInGarage.id = `${quantity}`;
        this.quantityPages = Math.ceil(Number(quantity) / this.CARS_ON_PAGE);
        this.numberPagesInGarage.innerHTML = `Page ${this.activePage}/${this.quantityPages}`;
        this.setActivePageButtons(this.activePage, this.quantityPages);
    }
    private async carsViewInGarageOnPage(page: number) {
        this.garage.innerHTML = '';
        const data = await this.garageService.getCarsOnPage(page);
        data.forEach((element: CarType) => {
            const carLine = new CarLine(element.id).create(element.name, element.color, element.id);
            this.garage.append(carLine);
        });
    }

    private async addCreatedCar() {
        const data = await this.garageService.createCar({
            name: this.inputTextCreate.value,
            color: this.inputColorCreate.value,
        });
        const carsOnPageBeforeAdding = document.querySelectorAll('.line').length;
        if (carsOnPageBeforeAdding < this.MAX_QUANTITY_CARS_ON_PAGE) {
            const carLine = new CarLine(data.id).create(data.name, data.color, data.id);
            this.garage.append(carLine);
        }
    }

    private setActivePageButtons(pageActive: number, pagesQuantity: number) {
        if (pageActive > this.FIRST_PAGE) {
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
            this.numberPagesInGarage.setAttribute('id', this.activePage.toString());
            this.carsViewInGarageOnPage(this.activePage);
            if (this.buttonPrev.classList.contains('disabled')) this.buttonPrev.classList.remove('disabled');
            if (this.activePage === this.quantityPages) {
                this.buttonNext.classList.add('disabled');
            }
        }
    }

    private async openPrevPage() {
        this.activePage = Number(this.numberPagesInGarage.id);
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
    private generateListCars(): { name: string; color: string }[] {
        const NUMBER_CARS_FOR_GENERATE = 100;
        const NUMBER_BRANDS = CarList.length;
        return Array(NUMBER_CARS_FOR_GENERATE)
            .fill(null)
            .map(() => {
                const randomBrandNumber = getRandomNumber(NUMBER_BRANDS);
                const randomModelNumber = getRandomNumber(CarList[randomBrandNumber].models.length);
                return {
                    name: `${CarList[randomBrandNumber].brand} ${CarList[randomBrandNumber].models[randomModelNumber]}`,
                    color: getRandomColor(),
                };
            });
    }
    private addCarsToBase(params: { name: string; color: string }[]) {
        params.forEach((item) => this.garageService.createCar(item));
    }
    private async addCarsOnPage(startIndex: number) {
        const data = await this.garageService.getCarsOnPage(this.activePage);
        data.forEach((element: CarType, index: number) => {
            if (index >= startIndex) {
                const carLine = new CarLine(element.id).create(element.name, element.color, element.id);
                this.garage.append(carLine);
            }
        });
    }
    private async updateWinner(id: number, time: number, dataForUpdate: { wins: number; time: number }) {
        const wins = dataForUpdate.wins + 1;
        time = Math.min(time, dataForUpdate.time);
        await this.winnersService.updateWinnerApi({ id, wins, time });
    }
    private updateWinnersView() {
        WinnersView.getInstance().setWinnersDescription();
        WinnersView.getInstance().updateControlButtons();
        WinnersView.getInstance().drawTableBody();
    }
}
