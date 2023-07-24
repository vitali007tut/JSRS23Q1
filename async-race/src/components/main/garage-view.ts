import {
    createElement,
    createInputElement,
    createModalText,
    findClosest,
    findSelector,
    getAttribute,
    getDistance,
    getRandomColor,
    getRandomNumber,
    removeModalText,
} from '../utils/utils';
import { CarType } from '../utils/base';
import CarLine from './car-view/car-line';
import {
    createCarApi,
    createWinnerApi,
    getCarApi,
    getCarsOnPageApi,
    getNumberCarsApi,
    getWinnerApi,
    startEngineApi,
    stopEngine,
    switchEngineToDrive,
    updateCarApi,
    updateWinnerApi,
} from '../utils/api';
import ImageItems from './car-view/image-items';
import CarList from '../utils/car-list';
import WinnersView from './winners-view';

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
    private quantityPages: number;
    private event: Event;
    private numberForFirstWinner: number;
    private readonly NUMBER_FOR_RESET: number = 10;
    private readonly FIRST_WIN: number = 1;
    constructor() {
        this.updateButton = createInputElement(['buttonUpdate'], 'button', 'Update');
        this.inputTextCreate = createInputElement(['createText'], 'text');
        this.inputTextUpdate = createInputElement(['updateText'], 'text');
        this.garage = createElement('div', ['garage']);
        this.numberCarsInGarage = createElement('div', ['cars-number']);
        this.numberPagesInGarage = createElement('div', ['pages-number']);
        this.inputColorCreate = createInputElement(['createColor'], 'color', '#ffffff');
        this.inputColorUpdate = createInputElement(['updateColor'], 'color', '#ffffff');
        this.buttonPrev = createInputElement(['prev', 'buttonPrev', 'disabled'], 'button', 'Prev');
        this.buttonNext = createInputElement(['next', 'buttonNext', 'disabled'], 'button', 'Next');
        this.event = new Event('click');
        this.quantityPages = 1;
        this.numberForFirstWinner = 0;
    }

    public create(): HTMLElement {
        const container = createElement('div', ['garage-container']);
        container.append(this.createControls(), this.createGarage());
        return container;
    }
    private createControls(): HTMLElement {
        const controls = createElement('div', ['controls']);
        const createLine = createElement('div', ['create-line']);
        const createButton = createElement('a', ['buttonCreate'], 'Create');
        createButton.addEventListener('click', () => this.createNewCar());
        createLine.append(this.inputTextCreate, this.inputColorCreate, createButton);
        this.inputTextUpdate.setAttribute('disabled', 'true');
        const updateLine = createElement('div', ['update-line']);
        this.updateButton.disabled = true;
        this.updateButton.addEventListener('click', () => this.updateCar());
        updateLine.append(this.inputTextUpdate, this.inputColorUpdate, this.updateButton);
        const commonLine = createElement('div', ['common-line']);
        const raceButton: HTMLElement = createElement('a', ['race-button'], 'Race');
        raceButton.addEventListener('click', () => this.race());
        const resetButton: HTMLElement = createElement('a', ['reset-button'], 'Reset');
        resetButton.addEventListener('click', () => this.reset());
        const generateButton = createElement('a', ['generate-button'], 'Generate Cars');
        generateButton.addEventListener('click', () => this.generate());
        commonLine.append(raceButton, resetButton, generateButton);
        controls.append(createLine, updateLine, commonLine);
        return controls;
    }
    public createGarage(): HTMLElement {
        const garageDescription: HTMLElement = createElement('div', ['garage-description']);
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
        const container: HTMLElement = createElement('div', ['page-controls']);
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
        console.log('update car', this.updateButton.getAttribute('id'));
        this.inputTextUpdate.setAttribute('disabled', 'true');
        document.querySelectorAll('.line').forEach((line) => line.classList.remove('selected'));
        const id = Number.parseInt(getAttribute(this.updateButton, 'id'));
        const name = this.inputTextUpdate.value;
        const color = this.inputColorUpdate.value;
        const param = { name, color, id };
        await updateCarApi(param);
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
        try {
            document.querySelectorAll('.car-image').forEach(async (car) => {
                const id = Number(car.getAttribute('id'));
                const dataStarted = await startEngineApi(id);
                const startTime = new Date().getTime();
                const timeForAnimation = dataStarted.distance / dataStarted.velocity;
                const growInSec: number = (distance * 1000) / timeForAnimation;
                let requestID = 0;
                const animation = () => {
                    const currentTime = new Date().getTime();
                    const step: number = ((currentTime - startTime) / 1000) * growInSec;
                    if (car instanceof HTMLElement && step < distance) {
                        car.style.transform = `translateX(${step}px)`;
                        requestID = requestAnimationFrame(animation);
                        car.setAttribute('requestID', requestID.toString());
                    }
                };
                animation();
                const dataDrive = await switchEngineToDrive(id);
                if (dataDrive.status === 500) cancelAnimationFrame(requestID);
                if (dataDrive.status === 200) {
                    this.numberForFirstWinner += 1;
                    if (this.numberForFirstWinner === 1) {
                        const dataWinner = await getWinnerApi(id);
                        const time = Number((timeForAnimation / 1000).toFixed(2));
                        const carWinner = await getCarApi(id);
                        createModalText(`Winner: ${carWinner.name}, time: ${time}sec`);
                        if (!!dataWinner.wins) {
                            this.updateWinner(id, time, dataWinner);
                        } else await createWinnerApi({ id, wins: this.FIRST_WIN, time });
                        this.updateWinnersView();
                    }
                }
            });
        } catch {}
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
            await stopEngine(id);
            if (car instanceof HTMLElement) car.style.transform = `translateX(0px)`;
        });
    }
    private generate(): void {
        const MAX_QUANTITY_CARS_ON_PAGE = 7;
        this.addCarsToBase(this.generateListCars());
        this.setQuantityCars();
        const carsOnPage = document.querySelectorAll('.line').length;
        if (carsOnPage < MAX_QUANTITY_CARS_ON_PAGE) this.addCarsOnPage(carsOnPage);
    }

    private async setQuantityCars() {
        const quantity = await getNumberCarsApi();
        this.numberCarsInGarage.innerHTML = `Garage(${quantity})`;
        this.numberCarsInGarage.id = `${quantity}`;
        this.quantityPages = Math.ceil(Number(quantity) / this.CARS_ON_PAGE);
        this.numberPagesInGarage.innerHTML = `Page ${this.activePage}/${this.quantityPages}`;
        this.setActivePageButtons(this.activePage, this.quantityPages);
    }
    private async carsViewInGarageOnPage(page: number) {
        this.garage.innerHTML = '';
        const data = await getCarsOnPageApi(page);
        data.forEach((element: CarType) => {
            const carLine = new CarLine(element.id).create(element.name, element.color, element.id);
            this.garage.append(carLine);
        });
    }

    private async addCreatedCar() {
        const data = await createCarApi({ name: this.inputTextCreate.value, color: this.inputColorCreate.value });
        const carsOnPageBeforeAdding = document.querySelectorAll('.line').length;
        if (carsOnPageBeforeAdding < 7) {
            const carLine = new CarLine(data.id).create(data.name, data.color, data.id);
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
        params.forEach((item) => createCarApi(item));
    }
    private async addCarsOnPage(startIndex: number) {
        const data = await getCarsOnPageApi(this.activePage);
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
        await updateWinnerApi({ id, wins, time });
    }
    private updateWinnersView() {
        WinnersView.getInstance().drawTableBody();
        WinnersView.getInstance().setWinnersDescription();
        WinnersView.getInstance().updateControlButtons();
    }
}
