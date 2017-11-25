import { config } from './config/config';
import { renderChannelList } from './containers/list';
import NewsChannel from './components/newsChannel';
import MenuToggle from './utilities/menuToggle';

document.addEventListener('DOMContentLoaded', () => {
    let channelsListContainer = document.querySelector('#channels-list-container');
    let channelsList = renderChannelList(channelsListContainer);
    config.forEach(newsChannel => new NewsChannel(newsChannel).render(channelsList));
    let chooseChannelButton = document.querySelector('#choose-channel-button');
    //addToggle();
    let toggles = document.querySelectorAll('[data-toggle-target]');
    Array.from(toggles).forEach(toggle => new MenuToggle(toggle).createToggle())
});
