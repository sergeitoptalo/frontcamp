let config = require ('./config/config.json');
import { renderChannelList } from './containers/list';
import NewsChannel from './components/newsChannel';
import MenuToggle from './utilities/menuToggle';
import '../styles/app-on.scss';

let configArray = [];
Object.keys(config).forEach(key => {
    configArray.push({ 'title': key, 'source': config[key]})
});

export default () => {
    let channelsListContainer = document.querySelector('#channels-list-container');
    let channelsList = renderChannelList(channelsListContainer);

    configArray.forEach(newsChannel => new NewsChannel(newsChannel).render(channelsList));

    let chooseChannelButton = document.querySelector('#choose-channel-button');
    let toggles = document.querySelectorAll('[data-toggle-target]');

    [...toggles].forEach(toggle => new MenuToggle(toggle).createToggle());
    console.log('News app is running');
}
