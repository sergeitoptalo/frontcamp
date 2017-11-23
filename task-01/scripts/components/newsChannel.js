import { renderListItem } from '../containers/listItem';

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

    renderChannelButton(container) {
        let buttonElement = document.createElement('button');
        let button = container.appendChild(buttonElement);
        let buttonText = document.createTextNode(this.title);
        button.appendChild(buttonText);
        button.addEventListener('click', () => { this.getVideos() });
    }

    render(container) {
        let listItem = renderListItem(container);
        this.renderChannelButton(listItem);
    }

    renderNews(data) {
        alert(this.title);
    }
}
