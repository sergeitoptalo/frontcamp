import BlogsContainer from "./blogsContainer/blogsContainer";

document.addEventListener('DOMContentLoaded', () => {
    let root = document.querySelector('#root');
    let blogsListContainer = document.querySelector('#blogs-list');
    let blogsContainer = new BlogsContainer(blogsListContainer, root);
    let addBlogButton = document.querySelector('#add-blog-button');
    addBlogButton.addEventListener('click', () => blogsContainer.addBlog());
})
