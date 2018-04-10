import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import congigureStore from '../../src/client/store';

const store = congigureStore(window.PRELOADED_STATE);

import LoginForm from '../../src/client/components/LoginForm';
import Input from '../../src/client/components/formComponents/Input';

describe('LoginForm Component', () => {
    const loginFormMarkup = <Provider store={store}><BrowserRouter><LoginForm /></BrowserRouter></Provider>;
    const loginForm = render(loginFormMarkup);

    it('should render without throwing an error', () => {
        expect(shallow(loginFormMarkup).exists(<form className='app-form'></form>)).toBe(true)
    })
    it('renders a email input', () => {
        expect(loginForm.find('#login').length).toEqual(1);
    })
    it('renders a password input', () => {
        expect(loginForm.find('#password').length).toEqual(1)
    })
})
