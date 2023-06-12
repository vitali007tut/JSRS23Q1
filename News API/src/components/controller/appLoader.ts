import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/' /* 'https://newsapi.org/v2/' */, {
            apiKey: '87f9980bfcb64b06827bd9f4eb0b1944', // take your key https://newsapi.org/
        });
    }
}

export default AppLoader;
