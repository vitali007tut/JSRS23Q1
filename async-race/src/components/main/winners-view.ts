import { getCarApi, getNumberWinnersApi, getWinnersApi } from '../utils/api';
import { LineWinnersType, WinnerType } from '../utils/base';
import { createElement, createInputElement } from '../utils/utils';
import ImageItems from './car-view/image-items';

export default class WinnersView {
    public table: HTMLElement;
    private readonly FIRST_PAGE = 1;
    private readonly WINNERS_ON_PAGE = 10;
    private buttonPrev: HTMLInputElement;
    private buttonNext: HTMLInputElement;
    private winnersQuantity: HTMLElement;
    private activePage: HTMLElement;
    private numberOfActivePage: number;
    public tableBody: HTMLElement;
    private static instance: WinnersView;

    private constructor() {
        this.table = createElement('table', ['table']);
        this.winnersQuantity = createElement('div', ['winners-quantity']);
        this.activePage = createElement('div', ['pages-quantity']);
        this.buttonPrev = createInputElement(['prev', 'buttonPrev'], 'button', 'Prev');
        this.buttonNext = createInputElement(['next', 'buttonNext'], 'button', 'Next');
        this.tableBody = createElement('tbody', ['tbody']);
        this.numberOfActivePage = this.FIRST_PAGE;
    }
    public static getInstance() {
        if (!WinnersView.instance) {
            WinnersView.instance = new WinnersView();
        }
        return WinnersView.instance;
    }

    public create(): HTMLElement {
        this.setWinnersDescription();
        this.table.append(this.createDescription(), this.createTable(), this.createPagesControls());
        this.updateControlButtons();
        return this.table;
    }
    private createDescription(): HTMLElement {
        const container = createElement('div', ['description-winners']);
        container.append(this.winnersQuantity, this.activePage);
        return container;
    }
    private createTable(): HTMLElement {
        const container = createElement('div', ['winners-table']);
        const headArray = ['Number', 'Car', 'Name', 'Wins', 'Best time (sec)'];
        const headInner = document.createElement('tr');
        headArray.forEach((tableHeadCeil) => {
            const ceil = document.createElement('th');
            ceil.innerHTML = tableHeadCeil;
            headInner.append(ceil);
        });
        const tableHead = createElement('thead', ['thead']);
        tableHead.append(headInner);
        this.drawTableBody();
        container.append(tableHead, this.tableBody);
        return container;
    }

    public async setWinnersDescription() {
        const quantity = await getNumberWinnersApi();
        this.winnersQuantity.innerHTML = `Winners(${quantity})`;
        const quantityOfPages = Math.ceil(Number(quantity) / this.WINNERS_ON_PAGE);
        if (this.numberOfActivePage > quantityOfPages) {
            this.numberOfActivePage -= 1;
            this.drawTableBody();
        }
        this.activePage.innerHTML = `Page ${this.numberOfActivePage}/${quantityOfPages}`;
    }
    private openPrevPage() {
        if (this.numberOfActivePage != this.FIRST_PAGE) {
            this.numberOfActivePage -= 1;
            this.setWinnersDescription();
            this.drawTableBody();
            this.updateControlButtons();
        }
    }
    private async openNextPage() {
        const quantity = await getNumberWinnersApi();
        const quantityOfPages = Math.ceil(Number(quantity) / this.WINNERS_ON_PAGE);
        if (this.numberOfActivePage != quantityOfPages) {
            this.numberOfActivePage += 1;
            this.setWinnersDescription();
            this.drawTableBody();
            this.updateControlButtons();
        }
    }
    private createPagesControls(): HTMLElement {
        const container = createElement('div', ['winners-controls-page']);
        this.buttonPrev.addEventListener('click', () => this.openPrevPage());
        this.buttonNext.addEventListener('click', () => this.openNextPage());
        container.append(this.buttonPrev, this.buttonNext);
        return container;
    }
    public async drawTableBody() {
        this.tableBody.innerHTML = '';
        const data = await getWinnersApi(this.numberOfActivePage, this.WINNERS_ON_PAGE);
        data.forEach(async (element: WinnerType, index: number) => {
            const id = element.id;
            const carFromGarage = await getCarApi(id);
            const param = {
                index,
                color: carFromGarage.color,
                name: carFromGarage.name,
                wins: element.wins,
                time: element.time,
            };
            const line = this.drawWinnerLine(param);
            this.tableBody.append(line);
        });
    }
    private drawWinnerLine(param: LineWinnersType): HTMLElement {
        const line = document.createElement('tr');
        const number = createElement('td', ['td-number'], `${param.index + 1}`);
        const imageHTML = ImageItems.getCar(param.color);
        const imageCar = createElement('td', ['td-car']);
        imageCar.innerHTML = imageHTML;
        const nameCeil = createElement('td', ['td-name'], `${param.name}`);
        const winsCeil = createElement('td', ['td-wins'], `${param.wins}`);
        const timeCeil = createElement('td', ['td-time'], `${param.time}`);
        line.append(number, imageCar, nameCeil, winsCeil, timeCeil);
        return line;
    }
    public async updateControlButtons() {
        const quantity = await getNumberWinnersApi();
        const quantityOfPages = Math.ceil(Number(quantity) / this.WINNERS_ON_PAGE);
        if (this.numberOfActivePage === this.FIRST_PAGE) {
            this.buttonPrev.classList.add('disabled');
        }
        if (this.numberOfActivePage === quantityOfPages) {
            this.buttonNext.classList.add('disabled');
        }
        if (this.numberOfActivePage > this.FIRST_PAGE) {
            this.buttonPrev.classList.remove('disabled');
        }
        if (this.numberOfActivePage < quantityOfPages) {
            this.buttonNext.classList.remove('disabled');
        }
    }
}
