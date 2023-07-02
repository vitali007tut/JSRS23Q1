export function  createElement(tag: string, classAdd: string, content: string = ''): HTMLElement {
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

export function viewByCharacters (word: string, inputPlace: HTMLInputElement): void {
  inputPlace.value = '';
  const arr = word.split('');
  arr.forEach((litter, index) => {
    setTimeout(() => {
      inputPlace.value += litter;
    }, index*200)
  })
}