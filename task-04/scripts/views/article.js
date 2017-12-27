function renderArticles(articles) {
/*     let {
        urlToImage,
        url,
        title,
        publishedAt,
        author,
        description
    } = articleConfig; */

    let result = ``;

    let articleTEmplate = 
    articles.forEach(({
        urlToImage,
        url,
        title,
        publishedAt,
        author,
        description
    } = article) => {
        result += `
        <div class="article">
            <div class="article-image-container">
                <img src=${urlToImage} />
            </div>
            <div class="article-text">
                <h3>
                    <a href="${url}" target="_blank">${title}</a>
                </h3>
                <div class="article-date">
                    ${new Date(publishedAt).getDate()}-${new Date(publishedAt).getMonth() + 1}-${new Date(publishedAt).getFullYear()}
                </div>
                ${author ? `
                    <div class="article-author">
                        ${author}
                    </div>` : ` 
                    <div></div>
                `
    }
                <p class="article-description">
                    ${description}
                </p>
            </div>
        </div>
    `
    })


    return result;
}

export { renderArticles };
