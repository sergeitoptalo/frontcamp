export function videosApi(key) {
    return fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1de7e5223cf14337a6dd0e1330b80c7f', { method: 'GET' });
}
