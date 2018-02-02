function sendData(url, method, data) {
    return fetch(url, { 
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

export { sendData };
