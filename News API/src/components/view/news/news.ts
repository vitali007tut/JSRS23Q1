import { DataType } from '../../base/base';
import { NewsTemplate } from '../../base/newsTemplate';
import './news.css';

class News {
    public draw(data: DataType[]): void {
        const news: DataType[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const docNews: HTMLElement | null = document.querySelector('.news');
        if (docNews) docNews.innerHTML = '';
        if (news != null) {
            news.forEach((item, idx) => {
                if (item) {
                    const newsElement = new NewsTemplate(
                        idx,
                        item.urlToImage,
                        item.author,
                        item.publishedAt,
                        item.title,
                        item.source.name,
                        item.description,
                        item.url
                    ).getElement();
                    if (docNews) docNews.appendChild(newsElement);
                }
            });
        }
    }
}

export default News;
