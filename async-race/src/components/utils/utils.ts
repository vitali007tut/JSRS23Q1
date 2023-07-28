export function createElement<K extends keyof HTMLElementTagNameMap>({
    tag,
    classList,
    textContent,
    innerHTML,
}: CreateElementPropsType<K>): HTMLElementTagNameMap[K] {
    const element: HTMLElementTagNameMap[K] = document.createElement(tag);

    if (classList) {
        element.classList.add(...classList);
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
}

type CreateElementPropsType<K> = {
    tag: K;
    classList?: string[];
    textContent?: string;
    innerHTML?: string;
};

export function findSelector(selector: string): HTMLElement {
    const element: HTMLElement | null = document.querySelector(selector);
    if (element) {
        return element;
    } else throw new Error('not exists');
}

export function findSelectorInput(selector: string): HTMLInputElement {
    const element: HTMLInputElement | null = document.querySelector(selector);
    if (element) {
        return element;
    } else throw new Error('not exists');
}

export function findClosest(item: HTMLElement, selector: string): HTMLElement {
    const element: HTMLElement | null = item.closest(selector);
    if (element) {
        return element;
    } else throw new Error('not exists');
}

export function getAttribute(item: HTMLElement, attribute: string): string {
    const value: string | null = item.getAttribute(attribute);

    if (value) {
        return value;
    } else throw new Error('not exists');
}

export function getRandomNumber(numberElements: number): number {
    return Math.floor(Math.random() * numberElements);
}

export function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += letters[getRandomNumber(letters.length)];
    }

    return color;
}

export function createModalText(textContent = ''): void {
    const modal: HTMLElement = createElement({ tag: 'div', classList: ['modal'], textContent });
    document.body.append(modal);
}

export function removeModalText(): void {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => modal.remove());
}

export function getDistance(): number {
    const documentClientWidth = document.documentElement.clientWidth;
    const carContainerWidth = findSelector(`.start-container`).clientWidth;
    const distance = documentClientWidth - carContainerWidth;

    return distance;
}
