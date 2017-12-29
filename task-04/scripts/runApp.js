let config = require('./config/config.json');
import MenuToggle from './utilities/menuToggle';
import '../styles/app-on.scss';

export default () => {
    let configArray = [];
    Object.keys(config).forEach(key => {
        configArray.push({ 'title': key, 'source': config[key] })
    });

    actionList.getActionByName('AddChannels', { channels: configArray });
    
    let chooseChannelButton = document.querySelector('#choose-channel-button');
    let toggles = document.querySelectorAll('[data-toggle-target]');

    [...toggles].forEach(toggle => new MenuToggle(toggle).createToggle());
}
