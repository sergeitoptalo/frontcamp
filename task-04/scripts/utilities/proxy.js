export default class Proxy {
    constructor(decorator) {
        this.decorator = decorator;
        this.proxyState = {};
        this.delay = 20000;
        this.cache = {};
    }

    sendRequest(channel) {
        this.proxyState[channel] = new Date();
        return this.decorator.getData(channel)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.status === "error") {
                    return [{
                        title: data.status,
                        description: data.message
                    }]
                }
                return data.articles;
            })
            .then(data => {
                this.cache[channel] = data;
                return data;
            })
            .catch(reason => alert(reason));
    }

    getData(channel) {
        let response;

        if (!this.proxyState[channel]) {
            return this.sendRequest(channel);
        } else {
            let now = new Date();
            let t = now - this.proxyState[channel];
            if (now - this.proxyState[channel] > this.delay) {
                response = this.sendRequest(channel);
                return this.sendRequest(channel);
            }
            return Promise.resolve(this.cache[channel]);
        }
    }
}
