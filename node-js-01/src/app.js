export default class App {
    constructor(blogsContainer, blogTextContainer) {
        this.blogs = [];
        this.blogsContainer = blogsContainer;
        this.blogTextContainer = blogsContainer;
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
                this.render(
                    `
                        ${this.blogs.map((blog, index) => `<div><a href="blogs/${index}">${blog.title}</a></div>`).join('')}
                    `
                );
            })
    }

    render() {
        this.blogsContainer.innerHTML = `
            ${this.blogs.map((blog, index) => `<div><a href="blogs/${index}">${blog.title}</a></div>`).join('')}
        `
    }
}
