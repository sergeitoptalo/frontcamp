export const getMainPageTemplate = () =>
    `
    <div class="articles-list-container"> 
        <articles-list articles="$ctrl.articles" current="$ctrl.current"></articles-list>
    </div>
    
`
