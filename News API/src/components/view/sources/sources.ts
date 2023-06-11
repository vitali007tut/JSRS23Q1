import { DataType } from '../news/DataType';
import './sources.css';

class Sources {
    draw(data: DataType[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (data != null && sourceItemTemp != null) {
            data.forEach((item: DataType) => {
                if (item) {
                    const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
                    const sourceItemName = sourceClone.querySelector('.source__item-name');
                    if (sourceItemName) sourceItemName.textContent = item.name;
                    const sourceItem = sourceClone.querySelector('.source__item');
                    if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);
                    fragment.append(sourceClone);
                }
            });
        }

        const newLocal = document.querySelector('.sources');
        if (newLocal) newLocal.append(fragment);
    }
}

export default Sources;
