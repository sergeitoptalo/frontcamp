export const loginHandler = (userData) => {
    return fetch(`http://localhost:8000/api/loginHandler`,
        {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
};

export const getUsedLogin = () => {
    return fetch(`http://localhost:8000/api/get-used-login`, { method: 'GET' })
};
