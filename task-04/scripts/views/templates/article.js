export const renderArticles = (articles) => articles.map(({ 
    urlToImage,
    url,
    title,
    publishedAt,
    author,
    description} = article) => 
        `<div class="article">
            <div class="article-image-container">
            ${urlToImage ? `
                <img src=${urlToImage} />
                `:``}
            </div>
            <div class="article-text">
                <h3>
                ${url && title ? `
                    <a href="${url}" target="_blank">${title}</a>
                    `: ``}
                    ${!url && title ? `${title}` : ``}
                </h3>
                ${publishedAt ? `
                <div class="article-date">
                    ${new Date(publishedAt).getDate()}-${new Date(publishedAt).getMonth() + 1}-${new Date(publishedAt).getFullYear()}
                </div>
                ` : ``}
                ${author 
                    ? `<div class="article-author">
                        ${author}
                    </div>`
                    : `<div></div>`
                }
                ${description ? `
                <p class="article-description">
                    ${description}
                </p>
                ` : ``}
            </div>
        </div>`).join('');
