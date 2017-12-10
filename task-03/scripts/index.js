import '../styles/app-off.scss';

if (!PRODUCTION) {
    console.log('DEVELOPMENT MODE');
}

if (PRODUCTION) {
    console.log('PRODUCTION MODE');
}

document.addEventListener('DOMContentLoaded', () => {
    let runAppButton = document.querySelector('#run-app-button');

    let runAppCode = event => import(/* webpackChunkName: "runApp" */ './runApp').then(module => {
        var turnAppOn = module.default;
        runAppButton.removeEventListener('click', runAppCode);
        turnAppOn();
    });

    runAppButton.addEventListener('click', runAppCode);
});
