function addChannelsListMarkup(channels) {
    let result = ``;
    channels.forEach(channel => {
        result += `
            <li>
                <button data-action="click: GetNews" data-channel="${channel.source}">${channel.title}</button>
            </li>
        `
    });

    return `<ul>${result}</ul>`;
}

export { addChannelsListMarkup };
