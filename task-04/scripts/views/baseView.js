import { statesComparsion } from '../utilities/statesComparsion';
import { getElementAttributes } from '../utilities/getElementAttributes';

export default class BaseView {
    constructor(actionList) {
        this.container;
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
            let actionData = getElementAttributes(element);

            element.addEventListener(actionData.actionEvent, (event) => {
                event.preventDefault();
                actionData.event = event;
                actionList.getActionByName(actionData.action, actionData);
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
