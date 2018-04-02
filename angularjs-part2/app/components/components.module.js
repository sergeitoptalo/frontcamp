import angular from 'angular';
import MainPageModule from './main-page/main-page.module';
import AddArticlePageModule from './add-article-page/add-article-page.module';
import ArticleFormModule from './article-form/article-form.module';
import ArticlePageModule from './article-page/article-page.module';
import EditArticlePageModule from './edit-article-page/edit-article-page.module';

const ComponentsModule = angular
    .module('app.components', [
        MainPageModule,
        AddArticlePageModule,
        ArticleFormModule,
        EditArticlePageModule,
        ArticlePageModule
    ])
    .name;

export default ComponentsModule;
