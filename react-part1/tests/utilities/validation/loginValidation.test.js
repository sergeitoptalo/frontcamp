import { isAlreadyUsedLogin } from '../../../src/client/utilities/validation/loginValidation';

describe('Login validation', () => {
    test("Should return true if login is already in use ", () => {
        const state = [{ login: 'login' }, { login: 'login1' }, { login: 'login2' }];
        const result = isAlreadyUsedLogin('login', state);
        
        expect(result).toEqual(true);
    });

    test("Should return true if login is already in use ", () => {
        const state = [{ login: 'login' }, { login: 'login1' }, { login: 'login2' }];
        const result = isAlreadyUsedLogin('login1', state);
        
        expect(result).toEqual(true);
    });

    test("Should return true if login is already in use ", () => {
        const state = [{ login: 'login' }, { login: 'login1' }, { login: 'login2' }];
        const result = isAlreadyUsedLogin('login2', state);
        
        expect(result).toEqual(true);
    });

    test("Should return true if login is already in use ", () => {
        const state = [{ login: 'login' }, { login: 'login1' }, { login: 'login2' }];
        const result = isAlreadyUsedLogin('login3', state);
        
        expect(result).toEqual(false);
    });
});
