export function createElement(tag: string, classAdd: string, content = ''): HTMLElement {
    const divElement: HTMLElement = document.createElement(tag);
    divElement.classList.add(classAdd);
    divElement.textContent = content;

    return divElement;
}

export function createImgElement(classImg: string, src: string): HTMLImageElement {
    const image = document.createElement('img');
    image.classList.add('figure');
    image.classList.add(classImg);
    image.src = src;
    return image;
}

export function viewByCharacters(word: string, inputPlace: HTMLInputElement): void {
    inputPlace.value = '';
    const arr = word.split('');
    arr.forEach((litter, index) => {
        setTimeout(() => {
            inputPlace.value += litter;
        }, index * 100);
    });
}

export function winModalWindow(element: HTMLElement): void {
    const modal = createElement('div', 'modal', `Congratulations, you won!`);
    const imgCongrats: HTMLImageElement = document.createElement('img');
    imgCongrats.src =
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHV0am1hZmpkdDh4dXR1bnJ5dHAydjBncDFyMm0yZHQ5bzM1eGFocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BPJmthQ3YRwD6QqcVD/giphy.gif';
    modal.appendChild(imgCongrats);
    const overlay = createElement('div', 'modal-overlay');
    overlay.appendChild(modal);
    element.appendChild(overlay);

    overlay.addEventListener('click', () => {
        modal.remove();
        overlay.remove();
    });
}

export function findSelectorWrapper(selector: string): HTMLElement {
    const element: HTMLElement | null = document.querySelector(selector);
    if (element) {
        return element;
    } else throw new Error('not exists');
}
