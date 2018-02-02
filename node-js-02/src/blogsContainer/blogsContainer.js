import { addBlogFormTemplate } from '../templates/addBlogForm';
import { sendData } from '../api/sendData';

export default class BlogsContainer {
    constructor(root) {
        this.root = root;
        this.blog = {

        }
    }

    addBlog() {
        let addBlogTemplate = addBlogFormTemplate;
        this.render(addBlogTemplate);
        let addBlogForm = document.forms['add-blog-form'];
        addBlogForm.addEventListener('submit', (event) => this.collectAddBlogFormData(event, addBlogForm))
    }

    collectAddBlogFormData(event, form) {
        event.preventDefault();
        let title = form.elements['title'].value;
        this.blog.title = title;
        sendData('/add-blog', 'POST', this.blog)
        .then(alert('sent'));
    }

    render(markup) {
        this.root.innerHTML = markup;
    }
}
