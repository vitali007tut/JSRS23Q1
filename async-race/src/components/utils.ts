/**
 * 
 * @param tag 
 * @param classAdd 
 * @param content 
 * @returns HTMLElement
 */
export function createElement(tag: string, classAdd: string, content = ''): HTMLElement {
  const element: HTMLElement = document.createElement(tag);
  element.classList.add(classAdd);
  element.textContent = content;
  return element;
}

export function createInputElement(inputId: string, inputType: string, value = ''): HTMLInputElement {
  const element: HTMLInputElement = document.createElement('input');
  element.type = inputType;
  element.id = inputId;
  element.value = value;
  return element;
}