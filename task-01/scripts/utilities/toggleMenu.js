export function addToggle() {
    let toggles = document.querySelectorAll('[data-toggle-target]');
    Array.from(toggles).forEach((toggle) => {
        toggle.addEventListener('click', (event) => {
            let toggledElement = document.getElementById(toggle.dataset.toggleTarget);
            if (toggledElement.dataset.toggle === 'expanded') {
                toggledElement.classList.add('collapsed');
                toggledElement.classList.remove('expanded');
                toggledElement.dataset.toggle = 'collapsed';
            } else {
                toggledElement.classList.add('expanded');
                toggledElement.classList.remove('collapsed');
                toggledElement.dataset.toggle = 'expanded';
            }
        })
    })
}
