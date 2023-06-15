import { DataType, NewsTempType } from '../../base/base';
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
                    const object: NewsTempType = {
                        index: idx,
                        url: item.urlToImage,
                        author: item.author,
                        publishedAt: item.publishedAt,
                        title: item.title,
                        name: item.source.name,
                        description: item.description,
                        readUrl: item.url,
                    };
                    const newsElement = new NewsTemplate(object).getElement();
                    if (docNews) docNews.appendChild(newsElement);
                }
            });
        }
    }
}

export default News;
