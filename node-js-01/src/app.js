export default class App {
    constructor(blogsContainer, blogTextContainer) {
        this.blogs = [];
        this.blogsContainer = blogsContainer;
        this.blogTextContainer = blogTextContainer;
    }

    getBlogs() {
        let blogs = fetch('/blogs', {
            method: 'GET'
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                let result = Object.keys(data).forEach(blog => this.blogs.push(data[blog]))
                this.render(this.blogsContainer, 
                    `
                        ${this.blogs.map((blog, index) => `<div><button data-blog="blogs/${index}">${blog.title}</button></div>`).join('')}
                    `
                );
                let blogsLinks = this.blogsContainer.querySelectorAll('[data-blog]');
                [...blogsLinks].forEach(link => link.addEventListener('click', () => { 
                    let url = link.dataset.blog;
                    this.getBlog(url);
                }));
            })
    }

    getBlog(url) {
        let blog = fetch(url, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            let text = this.blogs[data].text;
            this.render(this.blogTextContainer, text);
        })
    }

    render(container, markup) {
        container.innerHTML = markup;
    }
}
