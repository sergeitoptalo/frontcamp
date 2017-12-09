//import { config } from './config/config';
import { renderChannelList } from './containers/list';
import NewsChannel from './components/newsChannel';
import MenuToggle from './utilities/menuToggle';
import '../styles/app-on.scss';

let config = require ('./config/config.json');

let b = JSON.parse(config);
let array = [];
Object.keys(b).forEach(key => {
    array.push({ 'title': key, 'source': b[key]})
})

export default () => {
    let channelsListContainer = document.querySelector('#channels-list-container');
    let channelsList = renderChannelList(channelsListContainer);

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
