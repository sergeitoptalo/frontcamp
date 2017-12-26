function addChannelsListMarkup(channels) {
    let result = ``;
    channels.forEach(channel => {
        result += `
            <li>${channel.title}</li>
        `
    });

    return `<ul>${result}</ul>`;
}

export { addChannelsListMarkup };
