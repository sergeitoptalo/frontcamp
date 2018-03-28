export const getMainPageTemplate = () =>
    `
    <div class="app-container"> 
        <articles-list articles="$ctrl.articles"></articles-list>
    </div>
    <div ui-view class="output"></div>
`
