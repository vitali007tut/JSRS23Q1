import { CarType } from '../../utils/base';
import { createElement, findClosest, findSelector, findSelectorInput } from '../../utils/utils';
import { getCarApi, getCarsOnPageApi, getNumberCarsApi, removeCarApi, startEngineApi } from '../../utils/api';
import CarLine from './car-line';

export default class CarButtons {
    private readonly FIRST_PAGE: number = 1;
    public create() {}

    public getSelectButton(id: number): HTMLElement {
        const button = createElement('a', ['select', 'button', `${id}`], 'Select');
        button.addEventListener('click', async () => {
            const updateText: HTMLInputElement = findSelectorInput('.updateText');
            updateText.removeAttribute('disabled');

            const updateButton: HTMLInputElement = findSelectorInput('.buttonUpdate');
            updateButton.removeAttribute('disabled');
            updateButton.setAttribute('id', id.toString());

            document.querySelectorAll('.line').forEach((line) => line.classList.remove('selected'));
            findClosest(button, '.line').classList.add('selected');
            const data = await getCarApi(id);
            updateText.value = data.name;
            const updateColor: HTMLInputElement = findSelectorInput('.updateColor');
            updateColor.value = data.color;
        });
        return button;
    }
    public getRemoveButton(id: number): HTMLElement {
        const button = createElement('a', ['remove', 'button', `${id}`], 'Remove');
        button.addEventListener('click', () => {
            removeCarApi(id);
            findClosest(button, '.line').remove();
            this.updateGarageQuantity();
            const carsOnPageAfterRemove = document.querySelectorAll('.line').length;
            if (carsOnPageAfterRemove < 7) {
                this.updateActivePage();
            }
            this.updatePageQuantity();
        });
        return button;
    }

    public getStartButton(id: number): HTMLElement {
        const startButton: HTMLElement = createElement('a', ['start', 'button'], 'A');
        startButton.setAttribute('id', id.toString());
        startButton.addEventListener('click', async () => {
            console.log('engine started', id);
            const data = await this.startEngine(id);
            console.log(data);
        });
        return startButton;
    }
    public getStopButton(): HTMLElement {
        return createElement('a', ['stop', 'button', 'disable'], 'B');
    }

    private async updateGarageQuantity() {
        const quantity = await getNumberCarsApi();
        const carsNumber = findSelector('.cars-number');
        carsNumber.innerHTML = `Garage(${quantity})`;
        carsNumber.setAttribute('id', `${quantity}`);
    }

    private async updateActivePage() {
        const LAST_CAR_ON_PAGE = 6;
        const activePage = Number(findSelector('.pages-number').getAttribute('id'));
        const data = await getCarsOnPageApi(activePage);
        if (data.length > LAST_CAR_ON_PAGE) {
            const name = data[LAST_CAR_ON_PAGE].name;
            const color = data[LAST_CAR_ON_PAGE].color;
            const id = data[LAST_CAR_ON_PAGE].id;
            const lastLine = new CarLine().create(name, color, id);
            findSelector('.garage').append(lastLine);
        }
    }
    private async updatePageQuantity() {
        const CARS_ON_PAGE = 7;
        const carsQuantity = await getNumberCarsApi();
        const pagesNumberElement = findSelector('.pages-number');
        let activePage = Number(pagesNumberElement.getAttribute('id'));
        const carsOnPageAfterRemove = await getCarsOnPageApi(activePage);
        if (carsOnPageAfterRemove.length === 0) {
            if (activePage > 1) {
                activePage -= 1;
                pagesNumberElement.setAttribute('id', activePage.toString());
                const data = await getCarsOnPageApi(activePage);
                data.forEach((element: CarType) => {
                    const carLine = new CarLine().create(element.name, element.color, element.id);
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

    private async startEngine(id: number) {
        const clientWidth = document.documentElement.clientWidth;
        console.log('clientWidth', clientWidth, 'distance', clientWidth - 170);
        const element: HTMLElement = findSelector(`.image-id-${id}`);
        let start = 0;
        const data = await startEngineApi(id);
        // console.log(data.velocity)
        function performAnimation() {
            console.log(start);
            element.style.transform = 'translateX(' + Math.min((start * data.velocity) / 60, clientWidth - 170) + 'px)';
            start += 2;
            // const requestID: number = requestAnimationFrame(performAnimation);
        }
        // setTimeout(() => {
        //   cancelAnimationFrame(requestID)
        // }, (clientWidth - 170) * 1000 / data.velocity);
        performAnimation();
        // return await startEngineApi(id)
    }
}
