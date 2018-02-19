let loginHandler = (state) => fetch('/api/loginHandler', {
    method: 'POST',
    body: JSON.stringify(state),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

module.exports = { loginHandler };
