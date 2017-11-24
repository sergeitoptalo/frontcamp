import { videosApi } from '../api/videosApi';

export default class newsContainer {
    getVideos(key, section) {
        let videos = videosApi(key)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let container = this.getVideosContainer();
            section.renderNews(data.articles, container);
        })
    }

    getVideosContainer() {
        return document.querySelector('#news-container');
    }
}
