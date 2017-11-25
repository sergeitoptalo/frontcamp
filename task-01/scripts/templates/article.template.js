export function renderArticle(articleConfig) {
        return `
        <div class="article">
            <div class="article-image-container">
                <img src=${articleConfig.urlToImage} />
            </div>
            <div class="article-text">
                <h3>
                    <a href="${articleConfig.url}" target="_blank">${articleConfig.title}</a>
                </h3>
                <div class="article-date">
                    ${new Date(articleConfig.publishedAt).getDate()}-${new Date(articleConfig.publishedAt).getMonth() + 1}-${new Date(articleConfig.publishedAt).getFullYear()}
                </div>
                ${articleConfig.author ? `
                    <div class="article-author">
                        ${articleConfig.author}
                </div>` : ` 
                    <div></div>
                `
                }
                <p class="article-description">
                    ${articleConfig.description}
                </p>
            </div>
        </div>
    `
}
