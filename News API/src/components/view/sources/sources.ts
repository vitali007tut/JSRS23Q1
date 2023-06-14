import { DataType } from '../../base/base';
import './sources.css';

class Sources {
    public draw(data: DataType[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (data != null && sourceItemTemp != null) {
            data.forEach((item: DataType) => {
                if (item) {
                    const sourceClone = sourceItemTemp.content.cloneNode(true) as Element; // how to change?
                    const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                    if (sourceItemName) sourceItemName.textContent = item.name;
                    const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
                    if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);
                    fragment.append(sourceClone);
                }
            });
        }

        const newLocal: HTMLElement | null = document.querySelector('.sources');
        if (newLocal) newLocal.append(fragment);
    }
}

export default Sources;
