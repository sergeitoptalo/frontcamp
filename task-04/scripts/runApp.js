let config = require('./config/config.json');
import '../styles/app-on.scss';
import { setChannelsConfiguration } from './actions/actions.js';

export default (store) => {
    let configArray = [];
    Object.keys(config).forEach(key => {
        configArray.push({ 'title': key, 'source': config[key] })
    });
    store.dispatch(setChannelsConfiguration(configArray));
    
    let chooseChannelButton = document.querySelector('#choose-channel-button');
    let toggles = document.querySelectorAll('[data-toggle-target]');
}
