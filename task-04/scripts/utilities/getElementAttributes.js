function getElementAttributes(element) {
    let data = {};

    let elementChannelSourceAttribute = null;
    let elementActionAttributes = element.dataset.action.split(':');
    
    if (element.dataset.channel) {
        elementChannelSourceAttribute = element.dataset.channel;
        data.source = elementChannelSourceAttribute;
    }

    let actionEvent = elementActionAttributes[0];
    let action = elementActionAttributes[1].trim();

    data.actionEvent = actionEvent;
    data.action = action;

    return data;
}

export { getElementAttributes };
