export default class ToggleContainer {
    constructor() {
        this.currentToggles = [];
    }

    changeToggleState() {
        if (this.expanded) {
            this.toggledElement.classList.add(this.collapsedClassName);
           this.toggledElement.classList.remove(this.expandedClassName);
            
        } else {
            this.toggledElement.classList.add(this.expandedClassName);
            this.toggledElement.classList.remove(this.collapsedClassName);
        }
        this.expanded = !this.expanded;
    }
}
