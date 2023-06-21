export function createElement(tag: string, classAdd: string, content: string = ''): HTMLElement {
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
