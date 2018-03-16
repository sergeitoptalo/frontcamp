import React from 'react';

const FormMessage = ({text, status}) => (
    <div className={`alert ${status}`} role="alert">
        {text}
    </div>
);

export default FormMessage;
