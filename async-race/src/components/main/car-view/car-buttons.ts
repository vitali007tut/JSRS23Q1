import { CarType } from '../../utils/base';
import { createElement, findClosest, findSelector, findSelectorInput } from '../../utils/utils';
import CarLine from './car-line';
import WinnersView from '../winners-view';
import GarageService from '../../utils/garage-service';
import WinnersService from '../../utils/winners-service';

export default class CarButtons {
    private readonly FIRST_PAGE: number = 1;
    private readonly LIMIT_CARS_ON_PAGE = 7;
    private garageService = new GarageService();
    private winnersService = new WinnersService();

    public getSelectButton(id: number): HTMLElement {
        const button = createElement({ tag: 'a', classList: ['select', 'button', `${id}`], textContent: 'Select' });
        button.addEventListener('click', async () => {
            const updateText: HTMLInputElement = findSelectorInput('.updateText');
            updateText.removeAttribute('disabled');
            const updateButton: HTMLInputElement = findSelectorInput('.buttonUpdate');
            updateButton.removeAttribute('disabled');
            updateButton.setAttribute('id', id.toString());
            document.querySelectorAll('.line').forEach((line) => line.classList.remove('selected'));
            findClosest(button, '.line').classList.add('selected');
            const data = await this.garageService.getCar(id);
            updateText.value = data.name;
            const updateColor: HTMLInputElement = findSelectorInput('.updateColor');
            updateColor.value = data.color;
        });

        return button;
    }

    public getRemoveButton(id: number): HTMLElement {
        const button = createElement({ tag: 'a', classList: ['remove', 'button', `${id}`], textContent: 'Remove' });
        button.addEventListener('click', () => {
            this.garageService.removeCar(id);
            this.winnersService.removeCarFromWinnersApi(id);
            findClosest(button, '.line').remove();
            this.updateGarageQuantity();
            const carsOnPageAfterRemove = document.querySelectorAll('.line').length;

            if (carsOnPageAfterRemove < this.LIMIT_CARS_ON_PAGE) {
                this.updateActivePage();
            }

            this.updatePageQuantity();
            WinnersView.getInstance().setWinnersDescription();
            WinnersView.getInstance().updateControlButtons();
            WinnersView.getInstance().drawTableBody();
        });
        return button;
    }

    public getStartButton(id: number): HTMLElement {
        const startButton: HTMLElement = createElement({ tag: 'a', classList: ['start', 'button'], textContent: 'A' });
        startButton.setAttribute('id', id.toString());

        return startButton;
    }

    public getStopButton(id: number): HTMLElement {
        const stopButton: HTMLElement = createElement({
            tag: 'a',
            classList: ['stop', 'button', 'disable'],
            textContent: 'B',
        });
        stopButton.setAttribute('id', id.toString());

        return stopButton;
    }

    private async updateGarageQuantity() {
        const quantity = await this.garageService.getNumberCars();
        const carsNumber = findSelector('.cars-number');
        carsNumber.innerHTML = `Garage(${quantity})`;
        carsNumber.setAttribute('id', `${quantity}`);
    }

    private async updateActivePage() {
        const LAST_CAR_ON_PAGE = 6;
        const activePage = Number(findSelector('.pages-number').getAttribute('id'));
        const data = await this.garageService.getCarsOnPage(activePage);

        if (data.length > LAST_CAR_ON_PAGE) {
            const name = data[LAST_CAR_ON_PAGE].name;
            const color = data[LAST_CAR_ON_PAGE].color;
            const id = data[LAST_CAR_ON_PAGE].id;
            const lastLine = new CarLine(id).create(name, color, id);
            findSelector('.garage').append(lastLine);
        }
    }

    private async updatePageQuantity() {
        const CARS_ON_PAGE = 7;
        const carsQuantity = await this.garageService.getNumberCars();
        const pagesNumberElement = findSelector('.pages-number');
        let activePage = Number(pagesNumberElement.getAttribute('id'));
        const carsOnPageAfterRemove = await this.garageService.getCarsOnPage(activePage);

        if (carsOnPageAfterRemove.length === 0) {
            if (activePage > 1) {
                activePage -= 1;
                pagesNumberElement.setAttribute('id', activePage.toString());
                const data = await this.garageService.getCarsOnPage(activePage);
                data.forEach((element: CarType) => {
                    const carLine = new CarLine(element.id).create(element.name, element.color, element.id);
                    findSelector('.garage').append(carLine);
                });
            }
        }

        const quantityPages = Math.ceil(Number(carsQuantity) / CARS_ON_PAGE);
        pagesNumberElement.innerHTML = `Pages ${activePage}/${quantityPages}`;

        if (activePage === quantityPages) {
            const buttonNext = findSelector('.buttonNext');
            buttonNext.classList.add('disabled');
        }

        if (activePage === this.FIRST_PAGE) {
            const buttonPrev = findSelector('.buttonPrev');
            buttonPrev.classList.add('disabled');
        }
    }
}
