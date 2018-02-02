import { addBlogFormTemplate } from '../templates/addBlogForm';
import { sendData } from '../api/sendData';

export default class BlogsContainer {
    constructor(blogsListContainer, root) {
        this.root = root;
        this.blogsListContainer = blogsListContainer;
        this.blogs = [];
        this.blog = {};
        this.renderBlogsList();
    }

    renderBlogsList() {
        let blogs = fetch('/blogs', { method: 'GET' })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.blogs = data;
            })
            .then(() => {
                this.blogsListContainer.innerHTML = `
            <ul>
                ${this.blogs.map(blog => `<li><button data-id="${blog._id.id}">${blog._id.title}</button><span>${blog._id.date}</span></li>`)}
            </ul>
        `})
            .then(() => {
                this.blogsListContainer.addEventListener('click', (event) => {
                    if (event.target.dataset) {
                        this.getBlog(event.target.dataset.id);
                    }
                })
            })
            ;
    }

    getBlog(id) {
        sendData(`/blogs/${id}`, 'GET')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            this.blog = data;
            this.render(`
            <div><button id="edit-blog-button">Edit blog</button></div>
                <h3>${this.blog.title}</h3>
                <div>${this.blog.date}</div>
                <div>${this.blog.author}</div>
                <div>${this.blog.text}</div>
            `)
            document.querySelector('#edit-blog-button').addEventListener('click', () => this.editBlog());
        })
    }

    editBlog() {
        let form = this.renderForm();
        form.elements['title'].value = this.blog.title;
        form.elements['author'].value = this.blog.author;
        form.elements['text'].value = this.blog.text;
    }

    renderForm() {
        let addBlogTemplate = addBlogFormTemplate;
        this.render(addBlogTemplate);
        let addBlogForm = document.forms['add-blog-form'];
        return addBlogForm;
    }

    addBlog() {
        let form = this.renderForm();
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.collectAddBlogFormData(event, form)
        });
    }

    collectAddBlogFormData(event, form) {
        event.preventDefault();
        this.blog.title = form.elements['title'].value;
        this.blog.author = form.elements['author'].value;
        this.blog.text = form.elements['text'].value;
        this.blog.date = new Date();
        sendData('/add-blog', 'POST', this.blog)
            .then(alert('sent'));
    }

    render(markup) {
        this.root.innerHTML = markup;
    }
}
