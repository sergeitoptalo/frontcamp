export const getMainPageTemplate = () =>
    `
    <header>
        <a href="#!/add">Add article</a>
    </header>
    <div class="articles-list-container"> 
        <articles-list articles="$ctrl.articles" current="$ctrl.current"></articles-list>
    </div>
    
`
