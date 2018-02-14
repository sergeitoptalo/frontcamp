import React from 'react';
//import { render } from 'react-dom';
import RegistrationForm from './registrationForm.jsx';

export default class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
               <RegistrationForm />
            </div>
        )
    }
}
