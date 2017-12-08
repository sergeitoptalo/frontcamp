
import '../styles/app-off.scss';

if (!PRODUCTION) {
    console.log('DEVELOPMENT MODE');
}

if (PRODUCTION) {
    console.log('PRODUCTION MODE');
}

document.addEventListener('DOMContentLoaded', () => {
    let appOnOffButton = document.querySelector('#on-off-button');
    appOnOffButton.onclick = e => import(/* webpackChunkName: "turnAppOn" */ './turnAppOn').then(module => {
        var turnAppOn = module.default;
        turnAppOn();
    });
});
