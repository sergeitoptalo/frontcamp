import App from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    let blogsContainer = document.querySelector('#blogs-container');
    let blogTextOutput = document.querySelector('#blog-text');
    let app = new App(blogsContainer, blogTextOutput).getBlogs();
})
