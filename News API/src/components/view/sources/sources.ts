import { DataType } from '../../base/base';
import { SourceTemplate } from '../../base/sourceTemplate';
import './sources.css';

class Sources {
    public draw(data: DataType[]): void {
        if (data != null) {
            data.forEach((item: DataType) => {
                if (item) {
                    const sourceElement = new SourceTemplate(item.name, item.id).getElement();
                    const newLocal: HTMLElement | null = document.querySelector('.sources');
                    if (newLocal) newLocal.append(sourceElement);
                }
            });
        }
    }
}

export default Sources;
