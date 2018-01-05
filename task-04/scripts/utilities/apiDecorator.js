export default class ApiDecorator {
    constructor(api, key) {
        this.api = api;
        this.apiKey = key;
    }

    getData(source) {
        let data = this.api.getData(source, this.apiKey);
        return data;
    }
}
