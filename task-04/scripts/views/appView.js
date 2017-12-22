import BaseView from './baseView';

export default class AppView extends BaseView {
    render(state) {
        return this.toHtml(
            `${state.appIsRunning ? 
            `app is running` :
            `<button>Turn On</button>`
            }
            `
        )
    }
}
