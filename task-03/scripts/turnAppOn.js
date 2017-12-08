import { config } from './config/config';
import { renderChannelList } from './containers/list';
import NewsChannel from './components/newsChannel';
import MenuToggle from './utilities/menuToggle';
import '../styles/app-on.scss';

export default () => {
    let channelsListContainer = document.querySelector('#channels-list-container');
    let channelsList = renderChannelList(channelsListContainer);

    let getConfig = fetch('./config/config.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log('data');
    })

    config.forEach(newsChannel => new NewsChannel(newsChannel).render(channelsList));

    let chooseChannelButton = document.querySelector('#choose-channel-button');
    let toggles = document.querySelectorAll('[data-toggle-target]');

    [...toggles].forEach(toggle => new MenuToggle(toggle).createToggle());
    console.log('News app is running');

    let offButton = document.querySelector('#off-button');
    offButton.onclick = e => import(/* webpackChunkName: "index" */ './index').then(module => {
        var off = module.default;
        off();
    });
}
