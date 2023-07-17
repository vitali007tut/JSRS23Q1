import { createElement, createInputElement } from "../utils";
import { InputType } from "../base";

export default class GarageView {
  private raceButton: HTMLElement;
  private resetButton: HTMLElement;
  private generateButton: HTMLElement;
  private createButton: HTMLElement;
  private updateButton: HTMLElement;
  private inputTextCreate: HTMLInputElement;
  private inputTextUpdate: HTMLInputElement;

  public create(): HTMLElement {
    const controls = createElement('div', 'controls');
    this.inputTextCreate = createInputElement('createText', 'text');
    const createLine = this.createControlLine({ className: 'create-line', inputTextElement: this.inputTextCreate, inputColorId: 'createColor'});
    this.createButton = createElement('a', 'buttonCreate', 'Create');
    this.createButton.addEventListener('click', () => this.createNewCar());
    createLine.append(this.createButton);
    this.inputTextUpdate = createInputElement('updateText', 'text');
    this.inputTextUpdate.setAttribute('disabled', "true");
    const updateLine = this.createControlLine({ className: 'update-line', inputTextElement: this.inputTextUpdate, inputColorId: 'updateColor'});
    this.updateButton = createElement('a', 'buttonUpdate', 'Update');
    this.updateButton.addEventListener('click', () => this.updateCar());
    updateLine.append(this.updateButton);
    const commonLine = createElement('div', 'common-line');
    this.raceButton = createElement('a', 'race-button', 'Race');
    this.raceButton.addEventListener('click', () => this.race())
    this.resetButton = createElement('a', 'reset-button', 'Reset');
    this.resetButton.addEventListener('click', () => this.reset())
    this.generateButton = createElement('a', 'generate-button', 'Generate Cars');
    this.generateButton.addEventListener('click', () => this.generate())
    commonLine.append(this.raceButton, this.resetButton, this.generateButton)
    controls.append(createLine, updateLine, commonLine);
    return controls;
  }

  private createControlLine(params: InputType): HTMLElement {
    const line = createElement('div', params.className);
    const inputColor: HTMLInputElement = createInputElement(params.inputColorId, 'color', '#ffffff');
    line.append(params.inputTextElement, inputColor);
    return line;
  }

  private createNewCar(): void {
    console.log('create new car')
  }

  private updateCar(): void {
    console.log('update car');
  }

  private race(): void {
    console.log('race');
  }

  private reset(): void {
    console.log('reset');
  }

  private generate(): void {
    console.log('generate');
  }
}