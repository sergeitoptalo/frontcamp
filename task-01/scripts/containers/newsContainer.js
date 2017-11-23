import { videosApi } from '../api/videosApi';

export default class newsContainer {
    getVideos(key, section) {
        let videos = videosApi(key)
        .then(response => {
            return response.json()
        })
        .then(data => {
            section.renderNews(data)
           // return data;
        })
    }
}
