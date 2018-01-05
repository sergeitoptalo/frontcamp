import ToggleContainer from "./toggleContainer.js";

export default class Toggle extends ToggleContainer {
    constructor(toggle) {
        super();
        this.toggle = toggle;
        this.toggledElement = null;
        this.expandedClassName = 'expanded';
        this.collapsedClassName = 'collapsed';
        this.expanded = false;
        this.collapsed = true;
    }

    createToggle() {
        let toggledElement = document.getElementById(this.toggle.dataset.toggleTarget);
        this.toggledElement = toggledElement;
        this.toggle.addEventListener('click', () => { this.changeToggleState() })
    }
}
