class BaseView {
    constructor() {
        this.container;
    }

    getElement(state) {
        let container = document.createElement('div');
        this.container = container;
        this.container.appendChild(this.render(state))
        return this.container;
    }

    toHtml(htmlString) {
        let div = document.createElement('div');
        div.innerHTML = htmlString;
        return div;
    }
}

module.exports = BaseView;
