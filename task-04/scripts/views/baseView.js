class BaseView {
    constructor() {
        this.container;
    }

    updateView(state) {
        let container = document.createElement('div');
        this.container = container;
        this.container.appendChild(this.render(state));
        let actionHolders = this.container.querySelectorAll('[data-action]');

        actionHolders.forEach(element => {
            let event = element.dataset.action.split(':')[0];
            element.addEventListener(event, () => {
                alert(event);
            })
        })

        return this.container;
    }

    toHtml(htmlString) {
        let div = document.createElement('div');
        div.innerHTML = htmlString;
        return div;
    }
}

module.exports = BaseView;
