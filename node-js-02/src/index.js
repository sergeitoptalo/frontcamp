import BlogsContainer from "./blogsContainer/blogsContainer";

document.addEventListener('DOMContentLoaded', () => {
    let root = document.querySelector('#root');
    let blogsContainer = new BlogsContainer(root);
    let addBlogButton = document.querySelector('#add-blog-button');
    addBlogButton.addEventListener('click', () => blogsContainer.addBlog());
})
