export function articlesApi(source) {
    let apiKey = '1de7e5223cf14337a6dd0e1330b80c7f'
    return fetch(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
        { method: 'GET' }
    );
}
