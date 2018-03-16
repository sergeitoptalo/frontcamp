import { appConfig } from '../../config/appConfig';

export const loginHandler = (userData) => fetch(`${appConfig.host}/api/loginHandler`,
    {
        method: 'POST',
        body: JSON.stringify(userData),
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

export const getUsedLogin = () => fetch(`${appConfig.host}/api/get-used-login`, { method: 'GET' });
