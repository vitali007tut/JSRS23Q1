enum SourceClasses {
    Item = 'source__item',
    itemName = 'source__item-name',
}

export class SourceTemplate {
    constructor(public name: string | null, public id: string) {
        this.name = name;
        this.id = id;
    }

    public getElement(): HTMLElement {
        const HTMLStart: HTMLElement | null = document.querySelector('.sources');
        const htmlElem: HTMLElement = document.createElement('div');
        htmlElem.classList.add(SourceClasses.Item);
        htmlElem.setAttribute('data-source-id', this.id);
        HTMLStart?.appendChild(htmlElem);
        const htmlSource: HTMLElement = document.createElement('span');
        htmlSource.classList.add(SourceClasses.itemName);
        htmlSource.textContent = this.name;
        htmlElem.appendChild(htmlSource);
        return htmlElem;
    }
}
