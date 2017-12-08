import { config } from './config/config';
import { renderChannelList } from './containers/list';
import NewsChannel from './components/newsChannel';
import MenuToggle from './utilities/menuToggle';
import '../styles/app.scss';

if (!PRODUCTION) {
    console.log('DEVELOPMENT MODE');
}

if (PRODUCTION) {
    console.log('PRODUCTION MODE');
}

document.addEventListener('DOMContentLoaded', () => {
    let channelsListContainer = document.querySelector('#channels-list-container');
    let channelsList = renderChannelList(channelsListContainer);

    config.forEach(newsChannel => new NewsChannel(newsChannel).render(channelsList));

    let chooseChannelButton = document.querySelector('#choose-channel-button');
    let toggles = document.querySelectorAll('[data-toggle-target]');

    [...toggles].forEach(toggle => new MenuToggle(toggle).createToggle());
    console.log('News app is running');
});
