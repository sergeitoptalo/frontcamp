import { config } from './config/config';
import { renderChannelList } from './containers/list';
import NewsChannel from './components/newsChannel';
import { addToggle } from './utilities/toggleMenu';

document.addEventListener('DOMContentLoaded', () => {
    let channelsListContainer = document.querySelector('#channels-list-container');
    let list = renderChannelList(channelsListContainer);
    config.forEach(newsChannel => new NewsChannel(newsChannel).render(list));
    let chooseChannelButton = document.querySelector('#choose-channel-button');
    addToggle();
});
