function addChannelsListMarkup(channels) {
    let result = ``;

    channels.forEach(({ source, title } = channel) => {
        result += `
            <li>
                <button data-action="click: GetNews" data-channel="${source}">${title}</button>
            </li>`
    });

    return `
            <ul>
                ${result}
            </ul>
        `;
}

export { addChannelsListMarkup };
