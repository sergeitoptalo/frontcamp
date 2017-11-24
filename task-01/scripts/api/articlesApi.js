export function articlesApi(source) {
    return fetch(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=1de7e5223cf14337a6dd0e1330b80c7f`,
        { method: 'GET' }
    );
}
