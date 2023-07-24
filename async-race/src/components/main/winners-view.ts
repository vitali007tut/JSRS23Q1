import { getCarApi, getNumberWinnersApi, getWinnersApi, sortTable } from '../utils/api';
import { LineWinnersType, SortTableType, WinnerType } from '../utils/base';
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
    private buttonWins: HTMLElement;
    private buttonBestTime: HTMLElement;
    private numberClicksWins = 0;
    private numberClicksTime = 0;

    private constructor() {
        this.table = createElement('table', ['table']);
        this.winnersQuantity = createElement('div', ['winners-quantity']);
        this.activePage = createElement('div', ['pages-quantity']);
        this.buttonPrev = createInputElement(['prev', 'buttonPrev'], 'button', 'Prev');
        this.buttonNext = createInputElement(['next', 'buttonNext'], 'button', 'Next');
        this.tableBody = createElement('tbody', ['tbody']);
        this.numberOfActivePage = this.FIRST_PAGE;
        this.buttonWins = createElement('th', ['button-wins'], 'Wins ');
        this.buttonBestTime = createElement('th', ['button-time'], 'Best time (sec) ');
    }
    public static getInstance() {
        if (!WinnersView.instance) {
            WinnersView.instance = new WinnersView();
        }
        return WinnersView.instance;
    }

    public create(): HTMLElement {
        this.setWinnersDescription();
        this.table.setAttribute('sort', 'id');
        this.table.setAttribute('order', 'ASC');
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
        const headArray = ['Number', 'Car', 'Name'];
        const headInner = document.createElement('tr');
        headArray.forEach((tableHeadCeil) => {
            const ceil = document.createElement('th');
            ceil.innerHTML = tableHeadCeil;
            headInner.append(ceil);
        });
        this.buttonWins.addEventListener('click', () => this.sortByWins());
        this.buttonBestTime.addEventListener('click', () => this.sortByTime());
        headInner.append(this.buttonWins, this.buttonBestTime);
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
        const sort = this.table.getAttribute('sort');
        const order = this.table.getAttribute('order');
        if (sort && order) this.drawTableWithSort(sort, order);
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
    private sortByWins() {
        this.numberClicksWins += 1;
        this.buttonBestTime.innerHTML = `Best time (sec)`;
        if (this.numberClicksWins % 2 === 1) {
            this.buttonWins.innerHTML = `Wins &#9660;`;
            this.drawTableWithSort('wins', 'DESC');
            this.table.setAttribute('sort', 'wins');
            this.table.setAttribute('order', 'DESC');
        } else {
            this.buttonWins.innerHTML = `Wins &#9650;`;
            this.drawTableWithSort('wins', 'ASC');
            this.table.setAttribute('sort', 'wins');
            this.table.setAttribute('order', 'ASC');
        }
    }
    private sortByTime() {
        this.numberClicksTime += 1;
        this.buttonWins.innerHTML = `Wins`;
        if (this.numberClicksTime % 2 === 1) {
            this.buttonBestTime.innerHTML = `Best time (sec) &#9660;`;
            this.drawTableWithSort('time', 'DESC');
            this.table.setAttribute('sort', 'time');
            this.table.setAttribute('order', 'DESC');
        } else {
            this.buttonBestTime.innerHTML = `Best time (sec) &#9650;`;
            this.drawTableWithSort('time', 'ASC');
            this.table.setAttribute('sort', 'time');
            this.table.setAttribute('order', 'ASC');
        }
    }
    private async drawTableWithSort(sort = 'id', order = 'ASC') {
        const paramForSort: SortTableType = {
            page: this.numberOfActivePage,
            limit: this.WINNERS_ON_PAGE,
            sort,
            order,
        };
        const data = await sortTable(paramForSort);
        this.tableBody.innerHTML = '';
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
}
