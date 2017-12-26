import { statesComparsion } from '../utilities/statesComparsion';

export default class BaseView {
    constructor(actionList) {
        this.container;
        //this.actionList = actionList;
    }

    updateView(state, currentState) {
        let _this = this;

        if (currentState) {
            this.state = currentState;
        }

        if (statesComparsion(this.state, state)) {
            return this.container;
        }

        document.body.innerHTML = '';
        let container = document.createElement('div');
        this.container = container;
        this.container.appendChild(this.render(state));
        let actionHolders = this.container.querySelectorAll('[data-action]');

        actionHolders.forEach(element => {
            let event = element.dataset.action.split(':')[0];
            let action = element.dataset.action.split(':')[1].trim();
            
            element.addEventListener(event, (evt) => {
                evt.preventDefault();
                actionList.getActionByName(action, evt);
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
