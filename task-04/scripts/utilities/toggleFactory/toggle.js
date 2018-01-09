import ToggleContainer from "./toggleContainer.js";

export default class Toggle extends ToggleContainer {
    constructor(toggle) {
        super();
        this.toggle = toggle;
        this.toggledElement = null;
        this.expanded = false;
        this.expandedClassName = 'expanded';
        this.collapsedClassName = 'collapsed';
    }

    createToggle() {
        let toggledElement = document.getElementById(this.toggle.dataset.toggleTarget);
        this.toggledElement = toggledElement;
        this.toggle.addEventListener('click', () => { this.changeToggleState() })
    }
}
