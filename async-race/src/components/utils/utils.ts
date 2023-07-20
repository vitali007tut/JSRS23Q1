export function createElement(tag: string, classArray: string[], content = ''): HTMLElement {
  const element: HTMLElement = document.createElement(tag);
  classArray.forEach(classItem => element.classList.add(classItem));
  element.textContent = content;
  return element;
}

export function createInputElement(classArray: string[], inputType: string, value = ''): HTMLInputElement {
  const element: HTMLInputElement = document.createElement('input');
  element.type = inputType;
  // element.id = inputId;
  classArray.forEach(classItem => element.classList.add(classItem));
  element.value = value;
  return element;
}

// export function createButtonElement(classArray: string[], value = ''): HTMLButtonElement {
//   const element: HTMLButtonElement = document.createElement('button');
//   classArray.forEach(classItem => element.classList.add(classItem));
//   element.id = inputId;
//   element.value = value;
//   return element;
// }