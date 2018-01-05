export default class ArticlesApi {
    getData(source, key) {
        return fetch(
            `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`,
            { method: 'GET' }
        );
    }
}
