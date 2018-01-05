import elemDataset from 'elem-dataset';
import Toggle from './toggle.js';
import { isNodesEqual } from '../../tools/isNodesEqual.js';

export default class ToggleFactory {
    constructor() {
        this.currentToggles = [];
    }

    getPageToggles() {
        let toggles = document.querySelectorAll('[data-toggle-target]');
        this.currentToggles = toggles;
        this.createToggles();
    }

    createToggles() {
        this.currentToggles.forEach(toggle => new Toggle(toggle).createToggle());
    }
}
