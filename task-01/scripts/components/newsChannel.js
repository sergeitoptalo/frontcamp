import NewsContainer from '../containers/newsContainer';

export default class NewsChannel extends NewsContainer {
    constructor(channelConfig) {
        super();
        this.title = channelConfig.title;
        this.key = channelConfig.key;
        this.newsSection = null;
    }

    getVideos() {
        super.getVideos(this.key, this);
    }

    addButton(container) {
        let buttonElement = document.createElement('button');
        let button = container.appendChild(buttonElement);
        let buttonText = document.createTextNode(this.title);
        button.appendChild(buttonText);
        button.addEventListener('click', () => { this.getVideos() });
    }

    render(container) {
        let newsSectionElement = document.createElement('section');
        let newsSection = container.appendChild(newsSectionElement);
        this.newsSection = newsSection;

        this.addButton(newsSection);
    }

    renderNews(data) {
        alert(this.title);
    }
}
