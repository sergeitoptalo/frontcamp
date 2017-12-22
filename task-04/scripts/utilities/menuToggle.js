import elemDataset from 'elem-dataset';

export default class MenuToggle {
    constructor(toggle) {
        this.toggle = toggle;
        this.toggledElement = document.getElementById(elemDataset(this.toggle).toggleTarget);
        this.expandedClassName = 'expanded';
        this.collapsedClassName = 'collapsed';
        this.expanded = false;
        this.collapsed = true;
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
        this.collapsed = !this.collapsed;
    }

    createToggle() {
        this.toggle.addEventListener('click', () => { this.changeToggleState() })
    }
}
