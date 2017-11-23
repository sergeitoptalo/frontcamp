import { config } from './config/config';
import NewsChannel from './components/newsChannel';

document.addEventListener('DOMContentLoaded', () => {
    let channelsListContainer = document.querySelector('#channels-list-container');
    config.forEach(newsSection => new NewsSection(newsSection).render(channelsListContainer));
    let chooseChannelButton = document.querySelector('#choose-channel-button');
});
