import { atLeastOneEmptyField } from '../../../src/client/utilities/validation/emptyFieldsValidation';

describe('Empty Fields Validation', () => {
    test("Should return true if there is at least one empty field", () => {
        const state = { login: 'login', password: '' };
        const result = atLeastOneEmptyField(state);
        
        expect(result).toEqual(true);
    });

    test("Should return true if there is at least one empty field", () => {
        const state = {  login: '', password: '' };
        const result = atLeastOneEmptyField(state);
        
        expect(result).toEqual(true);
    });

    test("Should return true if there is at least one empty field", () => {
        const state = { login: '', password: 'awfawf' };
        const result = atLeastOneEmptyField(state);
        
        expect(result).toEqual(true);
    });

    test("Should return true if there is at least one empty field", () => {
        const state = { login: 'sefseg', password: 'awfawf' };
        const result = atLeastOneEmptyField(state);
        
        expect(result).toEqual(false);
    })
});
