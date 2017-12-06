export function articlesApi(source, apiKey) {
    return fetch(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
        { method: 'GET' }
    );
}
